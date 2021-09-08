<?php
namespace Slsgrid;

/**
 * For CLI indexing
 */
class IndexerCommand {

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
     *     wp slsgrid index size
     *
     * @when after_wp_load
     */
    function index( $args, $assoc_args ) {
        list( $name ) = $args;
        $sc = new Api\SettingController();
        $settings = $sc->sanitize_settings([]);
        // \WP_CLI::line($args[0]);
        (new SearchIndexer($settings))->createIndex(empty($args[0]) ? -1 : $args[0]);
    }
}
