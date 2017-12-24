module.exports = function stringHash (text) {
  return Array.from(text).reduce((total, current) => total + current.charCodeAt(0), 0);
}
