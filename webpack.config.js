/*global require, module, __dirname, process */
const path = require('path'),
	version = process.env.npm_package_version;
module.exports = {
	entry: './web/index',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, `site/${version}`)
	}
};

