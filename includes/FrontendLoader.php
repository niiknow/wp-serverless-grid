<?php
namespace Slsgrid;

/**
 * Frontend pages loader
 *
 */
class FrontendLoader
{
    private $prefix;

    /**
     * Initialize this class
     */
    public function __construct($prefix)
    {
        $this->prefix = $prefix;

    	// let say your prefix is wp-awesome-plugin, then it will be wp-awesome-plugin-vue-app
        add_shortcode( $this->prefix . '-vue-app', [ $this, 'render_frontend' ]);

    }

    /**
     * Render frontend app
     *
     * @param  array  $atts
     * @param  string $content
     *
     * @return string
     */
    public function render_frontend($atts, $content = '')
    {
    	// use postfix to handle multiple frontend app
    	// See Assets.php to add additional frontend js and css
    	$a = shortcode_atts( array(
	        'id' => 'vue-frontend-app',
	        'postfix' => 'frontend'
	    ), $atts );

		$postfix = esc_attr($a['postfix']);
        wp_enqueue_style( $this->prefix . '-' . $postfix);
        wp_enqueue_script( $this->prefix . '-' . $postfix);

        $indexer = new SearchIndexer( $this->prefix );

		// output data for use on client-side
    	// https://wordpress.stackexchange.com/questions/344537/authenticating-with-rest-api
    	wp_localize_script( $this->prefix . '-frontend', 'vue_wp_plugin_config', [
		    'taxonomies' => $indexer->taxonomies,
		    'indexFileUrl' => $indexer->indexFileUrl
		] );

        $content .= '<div id="' . esc_attr($a['id']) . '" ></div>';

        return $content;
    }
}
