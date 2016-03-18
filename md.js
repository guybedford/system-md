var showdown = require('showdown');
var converter = new showdown.Converter();

exports.translate = function(load) {
  var converterOptions = load.metadata.mdOptions;
  if (converterOptions) {
    for (var opt in converterOptions) {
      if (converterOptions.hasOwnProperty(opt)) {
        converter.setOption(opt, converterOptions[opt])
      }
    }
  }

  return 'module.exports = "' + converter.makeHtml(load.source)
    .replace(/(["\\])/g, '\\$1')
    .replace(/[\f]/g, "\\f")
    .replace(/[\b]/g, "\\b")
    .replace(/[\n]/g, "\\n")
    .replace(/[\t]/g, "\\t")
    .replace(/[\r]/g, "\\r")
    .replace(/[\u2028]/g, "\\u2028")
    .replace(/[\u2029]/g, "\\u2029")
  + '";';
}
