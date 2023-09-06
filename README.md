
string-utils
============

[![Build Status](https://github.com/ultraq/string-utils/actions/workflows/build.yml/badge.svg)](https://github.com/ultraq/string-utils/actions)
[![codecov](https://codecov.io/gh/ultraq/string-utils/graph/badge.svg?token=CYvb2fQJBY)](https://codecov.io/gh/ultraq/string-utils)
[![npm](https://img.shields.io/npm/v/@ultraq/string-utils.svg?maxAge=3600)](https://www.npmjs.com/package/@ultraq/string-utils)
[![Bundlephobia minified size](https://img.shields.io/bundlephobia/min/@ultraq/string-utils)](https://bundlephobia.com/result?p=@ultraq/string-utils)

A collection of utilities for JavaScript strings.


Installation
------------

Via npm:

```
npm install @ultraq/string-utils
```


API
---

### escapeHtml(string)

Escapes special HTML characters in a string with their entity code equivalents.
Returns a string safe to use as text within an HTML document.

 - **string**: string to escape.

### format(template, ...values)

Returns the replacement of each placeholder in a template string with a
corresponding replacement value.

 - **template**: String containing indexed (`{0}`, `{1}`, ...) or named
   (`{value}`, `{greeting}`, ...) placeholders, but not both.
   where `n` is the corresponding index value to have filled-in.
 - **...values**: Either an argument list / array of values to replace values in
   an indexed template string, or an object where the keys are the names in a
   named template string to replace with their values.
