/**
 * BLOCK: gutenberg-block-container
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'gutenberg-block/container', {
	title: __( 'Container' ),

	icon: (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
			<g fill="none">
				<path d="M0 0h24v24H0V0z" />
				<path opacity=".87" d="M0 0h24v24H0V0z" />
			</g>
			<path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3zM21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z" />
		</svg>
	),

	category: 'layout',

	keywords: [ __( 'Container' ), __( 'Layout' ) ],

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {object} props - Properties.
	 *
	 * @return {Component} Rendered component.
	 */
	edit: props => {
		// Creates a <p class='wp-block-cgb-block-gutenberg-block-container'></p>.
		return (
			<div className={ props.className }>
				<p>— Hello from the backend.</p>
				<p>
					CGB BLOCK: <code>gutenberg-block-container</code> is a new Gutenberg block
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">create-guten-block</a>
					</code>
					.
				</p>
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 *
	 * @param {object} props - Properties.
	 *
	 * @return {Component} Rendered component.
	 */
	save: () => {
		return (
			<div>
				<p>— Hello from the frontend.</p>
				<p>
					CGB BLOCK: <code>gutenberg-block-container</code> is a new Gutenberg block.
				</p>
				<p>
					It was created via{ ' ' }
					<code>
						<a href="https://github.com/ahmadawais/create-guten-block">create-guten-block</a>
					</code>
					.
				</p>
			</div>
		);
	},
} );
