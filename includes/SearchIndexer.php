<?php
namespace Slsgrid;

class SearchIndexer
{
    protected $indexFile;
    protected $indexFileName = 'search-index.json';
    protected $indexFileUrl;
    protected $settings;
    protected $users;

    public function __construct($settings)
    {
        $wpContentDir = rtrim(WP_CONTENT_DIR, '/') . '/';

        $this->indexFile = $wpContentDir . $this->indexFileName;
        $this->indexFileUrl = content_url($this->indexFileName);
        $this->settings = $settings;
        $this->users = array_column(get_users(), 'data', 'ID');
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
        	// exclude custom fields
        	if (! in_array($key, $this->settings['exclude_custom_fields'])) {
	    		$result[$key] = maybe_unserialize($value);
	    	}
	    }

	    return $result;
	}

    public function createIndex($size = -1)
    {
    	global $wpdb;

        $index = [];

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

        while ($the_query->have_posts()) {
            $the_query->the_post();
            global $post;


            $index[$post->ID] = $this->parseRecord($post);
        }

        // Cleanup after ourselves
	    wp_reset_query();
	    wp_reset_postdata();

        file_put_contents($this->indexFile, json_encode($index, JSON_PRETTY_PRINT));
    }

    public function refreshIndex()
    {
        if (file_exists($this->indexFile)) {
            unlink($this->indexFile);
        }

        $this->createIndex();
    }

    public function updateIndex($ID = 0, $post = null)
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
		$json = [
            'post_id' => $post->ID,
            'post_title' => $post->post_title,
            'post_name' => $post->post_name,
            'post_content' => strip_tags(apply_filters('the_content', $post->post_content)),
            'post_excerpt' => strip_tags($post->post_excerpt),
            'post_author_id' => $post->post_author,
            'post_author' => $this->users[$post->post_author],
            'post_url' => get_permalink($post->ID),
            'post_image_url' => $image_url === false ? '' : $image_url,
            'post_guid' => $post->guid,
        ];

        $terms = [];
        $taxonomies = get_object_taxonomies( $post );
        foreach($taxonomies as $tax_slug) {
            $terms[$tax_slug] = wp_get_object_terms($post->ID, $tax_slug);
        }

		$record = array_merge($json, $this->getPostCustom($post->ID), $terms);

		$result = apply_filters( \Slsgrid\Main::PREFIX . '_indexer_parserecord', $record, $post );
		return $result;
    }
}
