<?php
// don't call the file directly
if (! defined( 'ABSPATH' )) exit;

// this allow for using wordpress server-side translation
return array(
	'sections' => array(
		'general' => __('General', \ServerlessGrid\Main::PREFIX),
		'advanced' => __('Advanced', \ServerlessGrid\Main::PREFIX),
		'debugging' => __('Debugging', \ServerlessGrid\Main::PREFIX)
	),
	'options' => array(
		'enable_debug_messages' => array(
	        'name' => __('Enable Debug Messages', \ServerlessGrid\Main::PREFIX),
			'description' => __('When enabled the plugin will output debug messages in the JavaScript console.', \ServerlessGrid\Main::PREFIX),
			'section' => 'debugging',
			'type' => 'toggle',
			'default' => false
		),
		'cleanup_db_on_plugin_uninstall' => array(
			'name' => __('Cleanup database upon plugin uninstall', \ServerlessGrid\Main::PREFIX ),
			'description' => __('When enabled the plugin will remove any database data upon plugin uninstall.', \ServerlessGrid\Main::PREFIX),
			'section' => 'advanced',
			'type' => 'toggle',
			'default' => false
		),
		'include_post_types' => array(
			'name' => __('Post Types', \ServerlessGrid\Main::PREFIX),
			'description' => __('Which post types do you want to index?', \ServerlessGrid\Main::PREFIX),
			'section' => 'general',
			'type' => 'dropdownMultiselect',
			'optionsCallback' => function() { return get_post_types( '', 'names' ); },
			'default' => array('post', 'page'),
		)
	)
);
