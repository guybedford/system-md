var showdown = require('github:coreyti/showdown@0.3.1/src/showdown');
var converter = new showdown.converter();

module.exports = function(name, address, fetch, callback, errback) {
  fetch(address, function(markdown) {
    callback('module.exports = "'
    + converter.makeHtml(markdown)
      .replace(/(["\\])/g, '\\$1')
      .replace(/[\f]/g, "\\f")
      .replace(/[\b]/g, "\\b")
      .replace(/[\n]/g, "\\n")
      .replace(/[\t]/g, "\\t")
      .replace(/[\r]/g, "\\r")
      .replace(/[\u2028]/g, "\\u2028")
      .replace(/[\u2029]/g, "\\u2029")
    + '";');
  }, errback);
}
