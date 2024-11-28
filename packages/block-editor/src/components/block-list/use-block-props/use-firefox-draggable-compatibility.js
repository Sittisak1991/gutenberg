/**
 * WordPress dependencies
 */
import { useRefEffect } from '@wordpress/compose';

export function useFirefoxDraggableCompatibility() {
	return useRefEffect( ( node ) => {
		function onDown( event ) {
			if ( event.target.isContentEditable ) {
				node.draggable = false;
			} else {
				node.draggable = true;
			}
		}
		const { ownerDocument } = node;
		ownerDocument.addEventListener( 'pointerdown', onDown );
		return () => {
			ownerDocument.removeEventListener( 'pointerdown', onDown );
		};
	}, [] );
}
