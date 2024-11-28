/**
 * WordPress dependencies
 */
import { useRefEffect } from '@wordpress/compose';

export function useFirefoxDraggableCompatibility() {
	return useRefEffect( ( node ) => {
		function onDown( event ) {
			node.draggable = ! event.target.isContentEditable;
		}
		const { ownerDocument } = node;
		ownerDocument.addEventListener( 'pointerdown', onDown );
		return () => {
			ownerDocument.removeEventListener( 'pointerdown', onDown );
		};
	}, [] );
}
