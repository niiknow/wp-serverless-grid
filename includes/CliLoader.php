<?php
namespace Slsgrid;

/**
 * Cli commands loader
 */
class CliLoader
{
	/**
	 * Initialize this class
	 */
    public function __construct()
    {
    	// this is where you can load Cli
    	WP_CLI::add_command( \Slsgrid\Main::PREFIX, \Slsgrid\ExampleCommand::class );
    	WP_CLI::add_command( \Slsgrid\Main::PREFIX, \Slsgrid\IndexerCommand::class );
    }
}
