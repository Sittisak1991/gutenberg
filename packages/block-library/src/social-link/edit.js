/**
 * External dependencies
 */
import clsx from 'clsx';

/**
 * WordPress dependencies
 */
import { DELETE, BACKSPACE, ENTER } from '@wordpress/keycodes';
import { useDispatch } from '@wordpress/data';

import {
	BlockControls,
	InspectorControls,
	URLPopover,
	URLInput,
	useBlockEditingMode,
	useBlockProps,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { useState, useRef } from '@wordpress/element';
import {
	Button,
	Dropdown,
	PanelBody,
	PanelRow,
	TextControl,
	ToolbarButton,
	__experimentalInputControlSuffixWrapper as InputControlSuffixWrapper,
} from '@wordpress/components';
import { useMergeRefs } from '@wordpress/compose';
import { __ } from '@wordpress/i18n';
import { keyboardReturn } from '@wordpress/icons';

/**
 * Internal dependencies
 */
import { getIconBySite, getNameBySite } from './social-list';

const SocialLinkURLPopover = ( {
	url,
	setAttributes,
	setPopover,
	popoverAnchor,
	clientId,
} ) => {
	const { removeBlock } = useDispatch( blockEditorStore );
	return (
		<URLPopover
			anchor={ popoverAnchor }
			aria-label={ __( 'Edit social link' ) }
			onClose={ () => {
				setPopover( false );
				popoverAnchor?.focus();
			} }
		>
			<form
				className="block-editor-url-popover__link-editor"
				onSubmit={ ( event ) => {
					event.preventDefault();
					setPopover( false );
					popoverAnchor?.focus();
				} }
			>
				<div className="block-editor-url-input">
					<URLInput
						value={ url }
						onChange={ ( nextURL ) =>
							setAttributes( { url: nextURL } )
						}
						placeholder={ __( 'Enter social link' ) }
						label={ __( 'Enter social link' ) }
						hideLabelFromVision
						disableSuggestions
						onKeyDown={ ( event ) => {
							if (
								!! url ||
								event.defaultPrevented ||
								! [ BACKSPACE, DELETE ].includes(
									event.keyCode
								)
							) {
								return;
							}
							removeBlock( clientId );
						} }
						suffix={
							<InputControlSuffixWrapper variant="control">
								<Button
									icon={ keyboardReturn }
									label={ __( 'Apply' ) }
									type="submit"
									size="small"
								/>
							</InputControlSuffixWrapper>
						}
					/>
				</div>
			</form>
		</URLPopover>
	);
};

const SocialLinkEdit = ( {
	attributes,
	context,
	isSelected,
	setAttributes,
	clientId,
} ) => {
	const { url, service, label = '', rel } = attributes;
	const {
		showLabels,
		iconColor,
		iconColorValue,
		iconBackgroundColor,
		iconBackgroundColorValue,
	} = context;
	const [ showURLPopover, setPopover ] = useState( false );
	const wrapperClasses = clsx(
		'wp-social-link',
		// Manually adding this class for backwards compatibility of CSS when moving the
		// blockProps from the li to the button: https://github.com/WordPress/gutenberg/pull/64883
		'wp-block-social-link',
		'wp-social-link-' + service,
		{
			'wp-social-link__is-incomplete': ! url,
			[ `has-${ iconColor }-color` ]: iconColor,
			[ `has-${ iconBackgroundColor }-background-color` ]:
				iconBackgroundColor,
		}
	);

	// Use internal state instead of a ref to make sure that the component
	// re-renders when the popover's anchor updates.
	const [ popoverAnchor, setPopoverAnchor ] = useState( null );
	const isContentOnlyMode = useBlockEditingMode() === 'contentOnly';

	const IconComponent = getIconBySite( service );
	const socialLinkName = getNameBySite( service );
	// The initial label (ie. the link text) is an empty string.
	// We want to prevent empty links so that the link text always fallbacks to
	// the social name, even when users enter and save an empty string or only
	// spaces. The PHP render callback fallbacks to the social name as well.
	const socialLinkText = label.trim() === '' ? socialLinkName : label;

	const ref = useRef();
	const blockProps = useBlockProps( {
		className: 'wp-block-social-link-anchor',
		ref: useMergeRefs( [ setPopoverAnchor, ref ] ),
		onClick: () => setPopover( true ),
		onKeyDown: ( event ) => {
			if ( event.keyCode === ENTER ) {
				event.preventDefault();
				setPopover( true );
			}
		},
	} );

	return (
		<>
			{ isContentOnlyMode && showLabels && (
				// Add an extra control to modify the label attribute when content only mode is active.
				// With content only mode active, the inspector is hidden, so users need another way
				// to edit this attribute.
				<BlockControls group="other">
					<Dropdown
						popoverProps={ { position: 'bottom right' } }
						renderToggle={ ( { isOpen, onToggle } ) => (
							<ToolbarButton
								onClick={ onToggle }
								aria-haspopup="true"
								aria-expanded={ isOpen }
							>
								{ __( 'Text' ) }
							</ToolbarButton>
						) }
						renderContent={ () => (
							<TextControl
								__next40pxDefaultSize
								__nextHasNoMarginBottom
								className="wp-block-social-link__toolbar_content_text"
								label={ __( 'Text' ) }
								help={ __(
									'Provide a text label or use the default.'
								) }
								value={ label }
								onChange={ ( value ) =>
									setAttributes( { label: value } )
								}
								placeholder={ socialLinkName }
							/>
						) }
					/>
				</BlockControls>
			) }
			<InspectorControls>
				<PanelBody title={ __( 'Settings' ) }>
					<PanelRow>
						<TextControl
							__next40pxDefaultSize
							__nextHasNoMarginBottom
							label={ __( 'Text' ) }
							help={ __(
								'The text is visible when enabled from the parent Social Icons block.'
							) }
							value={ label }
							onChange={ ( value ) =>
								setAttributes( { label: value } )
							}
							placeholder={ socialLinkName }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<InspectorControls group="advanced">
				<TextControl
					__next40pxDefaultSize
					__nextHasNoMarginBottom
					label={ __( 'Link rel' ) }
					value={ rel || '' }
					onChange={ ( value ) => setAttributes( { rel: value } ) }
				/>
			</InspectorControls>
			{ /*
			 * Because the `<ul>` element has a role=document, the `<li>` is
			 * not semantically correct, so adding role=presentation is cleaner.
			 * https://github.com/WordPress/gutenberg/pull/64883#issuecomment-2472874551
			 */ }
			<li
				role="presentation"
				className={ wrapperClasses }
				style={ {
					color: iconColorValue,
					backgroundColor: iconBackgroundColorValue,
				} }
			>
				{ /*
				 * Disable reason: The `button` ARIA role is redundant but
				 * blockProps has a role of `document` automatically applied
				 * which breaks the semantics of this button since it removes
				 * the information about the popover.
				 */
				/* eslint-disable jsx-a11y/no-redundant-roles */ }
				<button aria-haspopup="dialog" { ...blockProps } role="button">
					<IconComponent />
					<span
						className={ clsx( 'wp-block-social-link-label', {
							'screen-reader-text': ! showLabels,
						} ) }
					>
						{ socialLinkText }
					</span>
				</button>
				{ /* eslint-enable jsx-a11y/no-redundant-roles */ }
				{ isSelected && showURLPopover && (
					<SocialLinkURLPopover
						url={ url }
						setAttributes={ setAttributes }
						setPopover={ setPopover }
						popoverAnchor={ popoverAnchor }
						clientId={ clientId }
					/>
				) }
			</li>
		</>
	);
};

export default SocialLinkEdit;
