import { addFilter } from '@wordpress/hooks';
import {
	registerBlockVariation,
	registerBlockBindingsSource,
} from '@wordpress/blocks';
import {
	PanelBody,
	ToolbarGroup,
	ToolbarButton,
	Dropdown,
	DatePicker,
} from '@wordpress/components';
import {
	InspectorControls,
	BlockControls,
	// eslint-disable-next-line @wordpress/no-unsafe-wp-apis
	__experimentalDateFormatPicker as DateFormatPicker,
} from '@wordpress/block-editor';
import { createHigherOrderComponent } from '@wordpress/compose';
import {
	dateI18n,
	humanTimeDiff,
	getSettings as getDateSettings,
} from '@wordpress/date';
import { edit as editIcon } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { DOWN } from '@wordpress/keycodes';

function isDateVariation( attributes ) {
	return (
		attributes?.metadata?.bindings?.content?.source === 'core/post-meta' &&
		attributes?.metadata?.bindings?.content?.args?.type ===
			'text_custom_field'
	);
}

const withDateControls = createHigherOrderComponent( ( BlockEdit ) => {
	return ( props ) => {
		if ( ! isDateVariation( props?.attributes ) ) {
			return <BlockEdit { ...props } />;
		}

		const {
			attributes: { metadata },
			setAttributes,
		} = props;
		const { date, dateFormat } = metadata?.bindings?.content?.args ?? {};
		const defaultFormat = getDateSettings().formats.date;

		return (
			<>
				<BlockEdit { ...props } />
				<BlockControls group="block">
					<ToolbarGroup>
						<Dropdown
							renderContent={ ( { onClose } ) => {
								return (
									<DatePicker
										currentDate={ date }
										onChange={ ( newDate ) => {
											setAttributes( {
												content: newDate,
											} );
											onClose();
										} }
									/>
								);
							} }
							renderToggle={ ( { isOpen, onToggle } ) => {
								const openOnArrowDown = ( event ) => {
									if ( ! isOpen && event.keyCode === DOWN ) {
										event.preventDefault();
										onToggle();
									}
								};
								return (
									<ToolbarButton
										aria-expanded={ isOpen }
										icon={ editIcon }
										title={ __( 'Change date' ) }
										onClick={ onToggle }
										onKeyDown={ openOnArrowDown }
									/>
								);
							} }
						/>
					</ToolbarGroup>
				</BlockControls>
				<InspectorControls>
					<PanelBody title={ __( 'Settings' ) }>
						<DateFormatPicker
							format={ dateFormat }
							defaultFormat={ defaultFormat }
							onChange={
								( /* newFormat */ ) => {
									//setBindingArgs( { dateFormat: newFormat } );
								}
							}
						/>
					</PanelBody>
				</InspectorControls>
			</>
		);
	};
}, 'withDateControls' );

registerBlockVariation( 'core/paragraph', {
	name: 'date',
	// icon: 'date', // FIXME
	title: '(WD4D) Date-enabled Paragraph',
	attributes: {
		metadata: {
			bindings: {
				content: {
					source: 'core/post-meta',
					args: {
						key: 'text_custom_field',
						type: 'text_custom_field', // FIXME
					},
				},
			},
		},
	},
	isActive: isDateVariation,
} );

registerBlockBindingsSource( {
	name: 'wd4d/date',
	label: __( 'Date' ),
	getValues( { bindings } ) {
		const { date, dateFormat } = bindings?.content?.args ?? {};
		const defaultFormat = getDateSettings().formats.date;

		let content;
		if ( date ) {
			content =
				dateFormat === 'human-diff'
					? humanTimeDiff( date )
					: dateI18n( dateFormat || defaultFormat, date );
		}

		return { content };
	},
} );

addFilter(
	'editor.BlockEdit',
	'wd4d/paragraph-with-date-controls',
	withDateControls
);
