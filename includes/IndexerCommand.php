<?php
namespace ServerlessGrid;

/**
 * For CLI indexing
 */
class IndexerCommand
{

    /**
     * Create index
     *
     * ---
     * default: success
     * options:
     *   - success
     *   - error
     * ---
     *
     * ## EXAMPLES
     *
     *     wp serverless-grid index size
     *
     * @when after_wp_load
     */
    public function index($args, $assoc_args)
    {
        list($name) = $args;

        \WP_CLI::line('Starting index ' . $args[0]);
        (new SearchIndexer(\ServerlessGrid\Main::PREFIX))->createIndex(empty($args[0]) ? -1 : $args[0]);
        \WP_CLI::line('Index completed!');
    }
}
