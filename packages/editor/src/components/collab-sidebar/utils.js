/**
 * Sanitizes a comment string by removing non-printable ASCII characters.
 *
 * @param {string} str - The comment string to sanitize.
 * @return {string} - The sanitized comment string.
 */
export function sanitizeCommentString( str ) {
	return str.trim();
}

/**
 * Gets the background color of the editor canvas.
 *
 * @return { string } Background color of the editor canvas.
 */
export function getEditorCanvasBackgroundColor() {
	const iframe = document.querySelector( 'iframe[name="editor-canvas"]' );
	const iframeDocument =
		iframe?.contentDocument || iframe?.contentWindow.document;
	const iframeBody = iframeDocument?.querySelector( 'body' );
	if ( iframeBody ) {
		const style = window.getComputedStyle( iframeBody );
		return style.backgroundColor;
	}

	return '';
}
