<?php
// don't call the file directly
if (! defined( 'ABSPATH' )) exit;

return array(
    'enable_debug_messages' => array(
        'name' => __( 'Enable Debug Messages', \Slsgrid\Main::PREFIX ),
		'description' => __( 'When enabled the plugin will output debug messages in the JavaScript console.', \Slsgrid\Main::PREFIX ),
		'type' => 'toggle',
		'code' => 'css',
		'default' => false
	),
	'cleanup_db_on_plugin_uninstall' => array(
		'name' => __( 'Cleanup database upon plugin uninstall.', \Slsgrid\Main::PREFIX ),
		'description' => __( 'When enabled the plugin will remove any database data upon plugin uninstall.', \Slsgrid\Main::PREFIX ),
		'type' => 'toggle',
		'code' => 'css',
		'default' => false
	),
	'include_post_types' => array(
		'name' => __( 'Post Types', \Slsgrid\Main::PREFIX ),
		'description' => __( 'Which post types do you want to index?', \Slsgrid\Main::PREFIX ),
		'type' => 'dropdownMultiselect',
		'optionsCallback' => function() { return get_post_types( '', 'names' ); },
		'default' => array( 'post', 'page' ),
	)
);
