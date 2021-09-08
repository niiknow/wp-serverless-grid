<?php
namespace Slsgrid;

/**
 * For CLI indexing
 */
class IndexerCommand {

    /**
     * Create index
     *
     * ## OPTIONS
     *
     * <name>
     * : The name of the person to greet.
     *
     * [--type=<type>]
     * : Whether or not to greet the person with success or error.
     * ---
     * default: success
     * options:
     *   - success
     *   - error
     * ---
     *
     * ## EXAMPLES
     *
     *     wp slsgrid index create size
     *
     * @when after_wp_load
     */
    function create( $args, $assoc_args ) {
        list( $name ) = $args;
        if ($args[0] == 'create') {
        	(new SearchIndexer())->createIndex($args[1] || -1);
        }
    }
}
