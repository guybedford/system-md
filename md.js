var showdown = require('showdown@0.3.1');
var converter = new showdown.converter();

exports.translate = function(load) {
  return converter.makeHtml(load.source);
}

exports.instantiate = function(load) {
  return load.source;
}
