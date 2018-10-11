/**
 * BLOCK: gutenberg-block-container
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const { compose } = wp.compose;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { getBlockDefaultClassName } = wp.blocks; // Import registerBlockType() from wp.blocks
const { Component, Fragment } = wp.element;
const {
	BlockAlignmentToolbar,
	BlockControls,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	withColors,
} = wp.editor;

import classnames from 'classnames';

import { name } from './block';

class BlockEdit extends Component {
	render() {
		const { attributes, backgroundColor, setBackgroundColor, setAttributes } = this.props;
		const { align } = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						colorSettings={ [
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __( 'Background Color' ),
							},
						] }
					/>
				</InspectorControls>
				<BlockControls>
					<BlockAlignmentToolbar
						controls={ [ 'full', 'wide' ] }
						value={ align }
						onChange={ newAlign => setAttributes( { align: newAlign } ) }
					/>
				</BlockControls>
				<div
					className={ classnames( getBlockDefaultClassName( name ), 'block-container', {
						'has-background': backgroundColor.color,
						[ backgroundColor.class ]: backgroundColor.class,
					} ) }
					data-align={ align }
					style={ {
						backgroundColor: backgroundColor.color,
					} }
				>
					<div className="">
						<InnerBlocks />
					</div>
				</div>
			</Fragment>
		);
	}
}

export default compose( [ withColors( 'backgroundColor' ) ] )( BlockEdit );
