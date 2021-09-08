<?php
/*
Plugin Name: Wordpress Serverless Grid
Plugin URI: https://github.com/niiknow/wp-sls-grid
Description: A WordPress Plugin for static site searching
Version: 0.1
Author: Tom Noogen
Author URI: https://github.com/niiknow/wp-sls-grid
License: GPL3
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Text Domain: slsgrid
Domain Path: /languages
*/

/**
 * Copyright (c) YEAR Tom Noogen (email: tommywhen@yahoo.com). All rights reserved.
 *
 * Released under the GPL license
 * http://www.opensource.org/licenses/gpl-license.php
 *
 * This is an add-on for WordPress
 * http://wordpress.org/
 *
 * **********************************************************************
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 * **********************************************************************
 */

// don't call the file directly
if (! defined( 'ABSPATH' )) exit;

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

// instantiate and run the plugin
\Slsgrid\Main::get_instance( __FILE__ )->run();
