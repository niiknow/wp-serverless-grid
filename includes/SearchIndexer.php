<?php
namespace Slsgrid;

class SearchIndexer
{
    public $indexFileUrl;
    public $taxonomies;

    protected $indexFile;
    protected $settings;
    protected $users;
    protected $prefix;

    public function __construct($prefix)
    {
        $wpContentDir = rtrim(WP_CONTENT_DIR, '/') . '/';

        $this->indexFile = $wpContentDir . 'search-index.json';
        $this->indexFileUrl = content_url('search-index.json');
        $this->taxonomies = $this->getTaxonomies();

		$sc = new Api\SettingController();
        $settings = $sc->sanitize_settings([]);

        $this->settings = $settings;
        $this->users = array_column(get_users(), 'data', 'ID');
        $this->prefix = $prefix;
    }

    public function registerHooks()
    {
        // cf. https://codex.wordpress.org/Post_Status_Transitions
        add_action('trashed_post', [$this, 'removePostFromIndex']);
        add_action('delete_post', [$this, 'removePostFromIndex']);
        add_action('publish_to_pending', [$this, 'removePostFromIndex']);
        add_action('publish_to_draft', [$this, 'removePostFromIndex']);
        add_action('publish_to_private', [$this, 'removePostFromIndex']);
        add_action('publish_post', [$this, 'updateIndex']);
        add_action('private_to_publish', [$this, 'updateIndex']);
        add_action('untrash_post', [$this, 'updateIndex']);
    }

    public function activationHook()
    {
        $this->createIndex();
    }

    /**
    * get custom fields for post, ignoring special fields (which start with '_')
    * @param int $post_id optional, will assume current post
    * @return array simple key=>value associative array
    */
    function getPostCustom($post_id = 0) {
        // get all custom field values for post
        $custom = get_post_custom($post_id);

        // values are arrays each with a single element;
        // reduce value arrays to strings
        $custom = array_map('implode', $custom);

        // we only want regular custom fields, not special fields
        // e.g. fields used by plugins to store other data;
        // get list of fields with keys that don't start with '_'
        $matches = preg_grep('/^[^_]/', array_keys($custom));

        // flip the array to get the field names as keys again
        $matches = array_flip($matches);

        // return only the elements with matching field names
        $data =  array_intersect_key($custom, $matches);

        $result = [];

        foreach($data as $key => $value) {
            $result[$key] = maybe_unserialize($value);
	    }

	    return $result;
	}

	public function getTaxonomies()
	{
		$taxonomies = get_taxonomies( '', 'names' );

		$tax = [];
        foreach($taxonomies as $tax_slug) {
        	$terms = [];
        	$myTerms = get_terms([
            	'taxonomy' => $tax_slug,
    			'hide_empty' => true,
            ]);

            foreach($myTerms as $term) {
            	$terms[] = array(
            		'value' => $term->slug,
            		'text' => $term->name
            	);
            }

            $tax[$tax_slug] = $terms;
        }

		$result = apply_filters( $this->prefix . '_indexer_taxonomies', $tax );

        return $result;
	}

    public function createIndex($size = -1)
    {
    	global $wpdb;

		wp_suspend_cache_addition( true );

        $index = [];
        $total = $size;
        if ($size <= -1) {
	        $args =  array(
	            'post_type'        => $this->settings['include_post_types'],
	            'post_status'      => 'publish',
	            'suppress_filters' => true,
	        );

			$query = new \WP_Query( $args );

			$total = $query->found_posts;
		}

		$args = array(
            'posts_per_page'   => $size,
            'offset'           => 0,
            'orderby'          => 'ID',
            'order'            => 'DESC',
            'post_type'        => $this->settings['include_post_types'],
            'post_status'      => 'publish',
            'suppress_filters' => true,
        );

        $the_query = new \WP_Query($args);

        $progress = NULL;

		if (defined( 'WP_CLI' ) && \WP_CLI) {
			\WP_CLI::line('Post count: ' . $total);
			$progress = \WP_CLI\Utils\make_progress_bar( 'Progress Bar', $total );
		}

        while ($the_query->have_posts()) {
            $the_query->the_post();
            global $post;

			if (! is_null($progress)) {
            	$progress->tick();
            }

            $index[$post->ID] = $this->parseRecord($post);
        }

        // Cleanup after ourselves
	    wp_reset_query();
	    wp_reset_postdata();

        file_put_contents($this->indexFile, json_encode($index));

		if (! is_null($progress)) {
        	$progress->finish();
        }

        wp_suspend_cache_addition( false );
    }

    public function refreshIndex()
    {
        if (file_exists($this->indexFile)) {
            unlink($this->indexFile);
        }

        $this->createIndex();
    }

    public function updateIndex($ID = 0, $post = NULL)
    {
        if (! file_exists($this->indexFile)) {
            $this->createIndex();
        } else {
            $index = json_decode(file_get_contents($this->indexFile), true);
            if (empty($post)) {
                $post = get_post($ID);
                if (empty($post)) {
                    return false;
                }
            }

            $index[$ID] = $this->parseRecord($post);
            file_put_contents($this->indexFile, json_encode($index));
        }
    }

    public function removePostFromIndex($ID)
    {
        if (! file_exists($this->indexFile)) {
            $this->createIndex();
        } else {
            $index = json_decode(file_get_contents($this->indexFile), true);
            if (! empty($index[$ID])) {
                unset($index[$ID]);
            }
            file_put_contents($this->indexFile, json_encode($index));
        }
    }

    public function parseRecord($post)
    {
    	$image_url = get_the_post_thumbnail_url($post->ID, 'full');
    	$home_url  = home_url( '/' );
		$json = [
            'id' => $post->ID,
            'title' => $post->post_title,
            'slug' => $post->post_name,
            'cnt' => strip_tags(apply_filters('the_content', $post->post_content)),
            'excerpt' => strip_tags($post->post_excerpt),
            'author_id' => $post->post_author,
            'author' => $this->users[$post->post_author],
            'url' => str_replace( $home_url, '', get_permalink($post->ID) ),
            'image_url' => $image_url === false ? '' : str_replace( $home_url, '', $image_url ),
        ];

        $terms = [];
        $taxonomies = get_object_taxonomies( $post );
        foreach($taxonomies as $tax_slug) {
            $terms[$tax_slug] = wp_get_object_terms($post->ID, $tax_slug);
        }

		$record = array_merge($json, $this->getPostCustom($post->ID), $terms);

		$result = apply_filters( $this->prefix . '_indexer_record', $record, $post );

		return $result;
    }
}
