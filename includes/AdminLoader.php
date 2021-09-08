<?php
namespace Slsgrid;

/**
 * Admin pages loader
 */
class AdminLoader
{
	/**
	 * Initialize this class
	 */
    public function __construct()
    {
        add_action('admin_menu', [ $this, 'admin_menu' ]);
    }

    /**
     * Register our menu page
     *
     * @return void
     */
    public function admin_menu()
    {
        global $submenu;

        $capability = 'manage_options';
        $slug       = 'vue-app';

        $hook = add_menu_page(
        	__('Vue App', \Slsgrid\Main::PREFIX),
        	__('Vue App', \Slsgrid\Main::PREFIX),
        	$capability,
        	$slug,
        	[ $this, 'plugin_page' ],
        	'dashicons-text'  // tip: https://developer.wordpress.org/resource/dashicons
        );

        if (current_user_can( $capability )) {
           add_submenu_page( $slug,
            	__('Dashboard',  \Slsgrid\Main::PREFIX),
            	__('Dashboard',  \Slsgrid\Main::PREFIX),
            	$capability,
            	'admin.php?page=' . $slug . '#/'
            );
            add_submenu_page( $slug,
            	__('Settings',  \Slsgrid\Main::PREFIX),
            	__('Settings',  \Slsgrid\Main::PREFIX),
            	$capability,
            	'admin.php?page=' . $slug . '#/settings'
            );
        }

        add_action('load-' . $hook, [ $this, 'init_hooks']);
    }

    /**
     * Initialize our hooks for the admin page
     *
     * @return void
     */
    public function init_hooks()
    {
        add_action('admin_enqueue_scripts', [ $this, 'enqueue_scripts' ]);
    }

    /**
     * Load scripts and styles for the app
     *
     * @return void
     */
    public function enqueue_scripts()
    {
        wp_enqueue_style(\Slsgrid\Main::PREFIX . '-admin');
        wp_enqueue_script(\Slsgrid\Main::PREFIX . '-admin');
    }

    /**
     * Render our admin page
     *
     * @return void
     */
    public function plugin_page()
    {
    	$settingController = new SettingController();

    	// output data for use on client-side
    	// https://wordpress.stackexchange.com/questions/344537/authenticating-with-rest-api
    	wp_localize_script( \Slsgrid\Main::PREFIX . '-data', 'vue_wp_plugin_config', [
		    'rest' => [
		        'endpoints' => [
		            'settings' => esc_url_raw( rest_url( $settingController->get_endpoint() ) ),
		        ],
		        'nonce'     => wp_create_nonce( 'wp_rest' ),  // add header X-WP-Nonce to authenticate
		        // 'action_nonce'     => wp_create_nonce( 'action_nonce' ),
		    ],
		] );

        echo '<div class="admin-app-wrapper"><div id="vue-admin-app"></div></div>';
    }
}
