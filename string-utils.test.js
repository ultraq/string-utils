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

/* eslint-env jest */
import {escapeHtml, format} from './string-utils';

/**
 * Tests for the string utilities.
 */
describe('string-utils', function() {

	describe('#escapeHtml', function() {

		test('Escape special characters', function() {
			let string = `This & that < thing > sing "ring" 'king'`;
			let result = escapeHtml(string);
			expect(result).toBe(`This &amp; that &lt; thing &gt; sing &quot;ring&quot; &#039;king&#039;`);
		});

		test('Return the value back to the user if the type is not a string', function() {
			[null, undefined, 123, Date.now, []].forEach(value => {
				let result = escapeHtml(value);
				expect(value).toBe(result);
			});
		});
	});

	describe('#format', function() {

		test('Should replace indexed tokens with the corresponding value', function() {
			let template = "There's a {0} in my {1}, dear {2}";
			let result = format(template, 'hole', 'bucket', 'Liza');
			expect(result).toBe("There's a hole in my bucket, dear Liza");
		});

		// Not sure if this test ever covered anything now
		test.skip('Non-string values should be coerced to strings before formatting', function() {
			let template = "There's a {0} in my {1}, dear {2}";
			let result = format(template, 0, 1, 2);
			expect(result).toBe("There's a 0 in my 1, dear 2");
		});

		test('Should replace named tokens with the corresponding value', function() {
			let template = "There's a {badThing} in my {posession}, dear {name}";
			let result = format(template, {
				badThing: 'hole',
				posession: 'bucket',
				name: 'Liza'
			});
			expect(result).toBe("There's a hole in my bucket, dear Liza");
		});

		test('Returns the template string if there are no replacements', function() {
			let template, result;

			template = "There's a {0} in my {1}, dear {2}";
			result = format(template);
			expect(result).toBe(template);

			template = "There's a {badThing} in my {posession}, dear {name}";
			result = format(template);
			expect(result).toBe(template);
		});
	});
});
