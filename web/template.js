/*global process, require */
const input = process.argv[2],
	output = process.argv[3],
	fs = require('fs'),
	handlebars = require('handlebars'),
	run = function () {
		'use strict';
		const source = fs.readFileSync(input, 'utf8'),
			template = handlebars.compile(source),
			result = template({
				version: process.env.npm_package_version
			});
		fs.writeFileSync(output, result, 'utf8');
	};

if (!input || !output) {
	console.error('Usage: node template.js <input> <output>');
	process.exit(1);
} else {
	run();
}


