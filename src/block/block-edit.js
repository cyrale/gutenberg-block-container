/**
 * WordPress dependencies
 */
const { compose } = wp.compose;
const { __ } = wp.i18n; // Import __() from wp.i18n
const { Component, Fragment } = wp.element;
const {
	BlockAlignmentToolbar,
	BlockControls,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	withColors,
} = wp.editor;

/**
 * External dependencies
 */
import classnames from 'classnames';

class BlockEdit extends Component {
	render() {
		const { attributes, backgroundColor, className, setBackgroundColor, setAttributes } = this.props;
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
						controls={ [ 'wide', 'full' ] }
						value={ align }
						onChange={ newAlign => setAttributes( { align: newAlign } ) }
					/>
				</BlockControls>
				<div
					className={ classnames( className, 'block-container', {
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
