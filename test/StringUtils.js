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

/* eslint-env mocha */
import {escapeHtml, format} from '../src/StringUtils';
import {assert} from 'chai';

/**
 * Tests for the string utilities.
 */
describe('StringUtils', function() {

	describe('#escapeHtml', function() {

		it('Return the value back to the user if the type is not a string', function() {
			[null, undefined, 123, Date.now, []].forEach(value => {
				let result = escapeHtml(value);
				assert.strictEqual(value, result);
			});
		});
	});

	describe('#format', function() {
		let template = "There's a {0} in my {1}, dear {2}";

		it('Should replace each token with the corresponding value', function() {
			let result = format(template, 'hole', 'bucket', 'Liza');
			assert.strictEqual(result, "There's a hole in my bucket, dear Liza");
		});

		it('Non-string values should be coerced to strings before formatting', function() {
			let result = format(template, 0, 1, 2);
			assert.strictEqual(result, "There's a 0 in my 1, dear 2");
		});
	});
});
