
/**
 * Escapes special HTML characters in a string with their entity code
 * equivalents.
 * 
 * @param {String} string
 * @return {String}
 *   HTML escaped string, safe for use in HTML.
 */
export function escapeHtml(string) {

	return typeof string !== 'string' ? string : string
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#039;');
}

/**
 * Returns the replacement of each placeholder in a template string with a
 * corresponding replacement value.
 * 
 * @param {String} template
 * @param {...String} values
 *   Argument list of values or a single array of values.
 * @return {String}
 *   Replaced template string.
 */
export function format(template, ...values) {

	return template.replace(/\{(\d+)\}/g, (match, index) => values[+index] + '');
}
