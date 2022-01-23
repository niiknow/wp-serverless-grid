<?php
/*
Plugin Name: Serverless Grid
Plugin URI: https://github.com/niiknow/wp-serverless-grid
Description: A WordPress Plugin for static site searching
Version: 1.0.0
Author: noogen
Text Domain: serverless_grid
Domain Path: /languages
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
 */

// don't call the file directly
if (!defined('ABSPATH')) {
    exit;
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| this application. We just need to utilize it! We'll simply require it
| into the script here so we don't need to manually load our classes.
|
 */

require __DIR__ . '/vendor/autoload.php';

/**
 * Returns the main instance to prevent the need to use globals.
 */
$instance = \ServerlessGrid\Main::get_instance(__FILE__, '1.0.0');
$instance->run();

return $instance;
