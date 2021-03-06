<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package Gutenberg_Block_Container
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * `wp-blocks`: includes block type registration and related functions.
 *
 * @since 1.0.0
 */
function gutenberg_block_container_block_assets() {
	// Styles.
	wp_enqueue_style(
		'gutenberg-block-container-style-css', // Handle.
		plugins_url( 'dist/blocks.style.build.css', dirname( __FILE__ ) ), // Block style CSS.
		[ 'wp-blocks' ], // Dependency to include the CSS after it.
		substr( sha1( filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.style.build.css' ) ), 0, 8 )
	);
}

// Hook: Frontend assets.
add_action( 'enqueue_block_assets', 'gutenberg_block_container_block_assets' );

/**
 * Enqueue Gutenberg block assets for backend editor.
 *
 * `wp-blocks`: includes block type registration and related functions.
 * `wp-element`: includes the WordPress Element abstraction for describing the structure of your blocks.
 * `wp-i18n`: To internationalize the block's text.
 *
 * @since 1.0.0
 */
function gutenberg_block_container_editor_assets() {
	// Scripts.
	wp_enqueue_script(
		'gutenberg-block-container-block-js', // Handle.
		plugins_url( '/dist/blocks.build.js', dirname( __FILE__ ) ), // Block.build.js: We register the block here. Built with Webpack.
		[ 'wp-blocks', 'wp-i18n', 'wp-element' ], // Dependencies, defined above.
		substr( sha1( filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.build.js' ) ), 0, 8),
		true // Enqueue the script in the footer.
	);

	// Styles.
	wp_enqueue_style(
		'gutenberg-block-container-block-editor-css', // Handle.
		plugins_url( 'dist/blocks.editor.build.css', dirname( __FILE__ ) ), // Block editor CSS.
		[ 'wp-edit-blocks' ], // Dependency to include the CSS after it.
		substr( sha1( filemtime( plugin_dir_path( __DIR__ ) . 'dist/blocks.editor.build.css' ) ), 0, 8)
	);
} // End function gutenberg_block_container_editor_assets().

// Hook: Editor assets.
add_action( 'enqueue_block_editor_assets', 'gutenberg_block_container_editor_assets' );

/**
 * Add the current block in the white list.
 *
 * @param array $blocks White listed blocks.
 *
 * @return array New list with the current block inside.
 */
function gutenberg_block_container_default_blocks( $blocks ) {
	if ( ! in_array( 'gutenberg-block/container', $blocks, true ) ) {
		$blocks[] = 'gutenberg-block/container';
	}

	return $blocks;
}

// Hook: Default blocks.
add_filter( 'gutenberg_basics_default_blocks', 'gutenberg_block_container_default_blocks' );
