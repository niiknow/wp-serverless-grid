<?php

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
	),
	'exclude_custom_fields' => array(
		'name' => __( 'Exclude Custom Fields', \Slsgrid\Main::PREFIX ),
		'description' => __( 'Which custom fields do you want to exclude from index?', \Slsgrid\Main::PREFIX ),
		'type' => 'text',
		'sanitize' => function($value) { return explode('/(\s*,*\s*)*,+(\s*,*\s*)*/', $value ); },
		'default' => 'wprm_import_backup',
	),
);
