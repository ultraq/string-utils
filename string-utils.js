/* 
 * Copyright 2017, Emanuel Rabina (http://www.ultraq.net.nz/)
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Escapes special HTML characters in a string with their entity code
 * equivalents.
 * 
 * @param {string} string
 * @return {string}
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
 * @param {string} template
 *   String containing indexed (`{0}`, `{1}`, ...) or named (`{value}`,
 *   `{greeting}`, ...) placeholders, but not both.
 * @param {...string|Record<string,string>} values
 *   Either an argument list / array of values to replace values in an indexed
 *   template string, or an object where the keys are the names in a named
 *   template string to replace with their values.
 * @return {string}
 *   Replaced template string.
 */
export function format(template, ...values) {

	if (values && values.length > 0) {
		let arg = values[0];
		if (values.length === 1 && typeof arg === 'object' && arg !== null) {
			return template.replace(/\{(.+?)\}/g, (match, token) => arg[token]);
		}
		else {
			return template.replace(/\{(\d+)\}/g, (match, index) => values[+index]);
		}
	}
	return template;
}
