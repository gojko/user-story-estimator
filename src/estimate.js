const sentences = require('./sentences.json'),
	stringHash = require('./string-hash');
module.exports = function estimate (text) {
	return sentences[stringHash(text) % sentences.length];
};
