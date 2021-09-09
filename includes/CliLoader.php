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
    public function __construct($prefix)
    {
    	// this is where you can load Cli
    	\WP_CLI::add_command( $prefix, \Slsgrid\ExampleCommand::class );
    	\WP_CLI::add_command( $prefix, \Slsgrid\IndexerCommand::class );
    }
}
