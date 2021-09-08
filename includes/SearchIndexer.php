<?php
namespace Slsgrid;

class SearchIndexer
{
    protected $indexFile;
    protected $indexFileName = 'search-index.json';
    protected $indexFileUrl;
    protected $settings;

    public function __construct($settings)
    {
        $wpContentDir = rtrim(WP_CONTENT_DIR, '/') . '/';

        $this->indexFile = $wpContentDir . $this->indexFileName;
        $this->indexFileUrl = content_url($this->indexFileName);
        $this->settings = $settings;
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
     * get post types to include for indexing
     *
     * @return Array array of post types
     */
    public function getPostTypes()
    {
        return $this->settings['include_post_types'];
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
	    return array_intersect_key($custom, $matches);
	}

    public function createIndex($size = -1)
    {
    	global $wpdb;

        $index = [];

		$args = array(
            'posts_per_page'   => $size,
            'offset'           => 0,
            'orderby'          => 'ID',
            'order'            => 'ASC',
            'post_type'        => $this->getPostTypes,
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


        file_put_contents($this->indexFile, json_encode($index));
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
		$json = [
            'id' => $post->ID,
            'title' => $post->post_title,
            'name' => $post->post_name,
            'content' => $post->post_content,
            'excerpt' => $post->post_excerpt,
            'author' => $post->post_author,
            'url' => get_permalink($post->ID),
            'image' => get_the_post_thumbnail_url($post->ID, 'full'),
            'meta' => $this->getPostCustom($post->ID)
        ];

		return $post;
    }
}
