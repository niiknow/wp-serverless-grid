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
		'input' => array(
	        'name' => __('Input', \ServerlessGrid\Main::PREFIX),
			'description' => __('Simple text input', \ServerlessGrid\Main::PREFIX),
			'section' => 'general',
			'type' => 'text',
			'default' => ''
		),
	    'email' => array(
	        'name' => __('Email', \ServerlessGrid\Main::PREFIX),
			'description' => __('Email type input', \ServerlessGrid\Main::PREFIX),
			'section' => 'general',
			'type' => 'email',
			'default' => ''
		),
		'url' => array(
	        'name' => __('URL', \ServerlessGrid\Main::PREFIX),
			'description' => __('URL input', \ServerlessGrid\Main::PREFIX),
			'section' => 'general',
			'type' => 'url',
			'default' => ''
		),
		'color' => array(
	        'name' => __('Color', \ServerlessGrid\Main::PREFIX),
			'description' => __('Color picker', \ServerlessGrid\Main::PREFIX),
			'section' => 'general',
			'type' => 'color',
			'default' => ''
		),
		'textarea' => array(
	        'name' => __('Textarea', \ServerlessGrid\Main::PREFIX),
			'description' => __('Simple textarea', \ServerlessGrid\Main::PREFIX),
			'section' => 'general',
			'type' => 'textarea',
			'default' => ''
		),
		'dropdown' => array(
	        'name' => __('Select one', \ServerlessGrid\Main::PREFIX),
			'description' => __('Single select dropdown', \ServerlessGrid\Main::PREFIX),
			'section' => 'general',
			'type' => 'dropdown',
			'default' => 'option1',
			'options' => ['option1', 'option2', 'option3']
		),
	    'additional_css' => array(
	        'name' => __('Additional CSS', \ServerlessGrid\Main::PREFIX),
			'description' => __('Add additional CSS to page', \ServerlessGrid\Main::PREFIX),
			'section' => 'advanced',
			'type' => 'code',
			'default' => ''
		),
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
			'description' => __('Demo multi-select dropdown', \ServerlessGrid\Main::PREFIX),
			'section' => 'general',
			'type' => 'dropdownMultiselect',
			'optionsCallback' => function() { return get_post_types( '', 'names' ); },
			'default' => array('post', 'page'),
		)
	)
);
