/*
 * @Author: fulp 
 * @Date: 2018-05-01 15:44:03 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-01 18:03:50
 */

module.exports = function(templateParams) {
  var _files = templateParams.htmlWebpackPlugin.files;
  var _jsChunk = _files.js;
  var _cssChunk = _files.css;
  var _scripts = "";
  var _styles = "";
  _jsChunk.map(function(filename) {
    var _filename = filename.split("public")[1];
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", _filename);
    _scripts +=
      "<script type='text/javascript'  src='./public" +
      _filename +
      "'></script>";
  });
  _cssChunk.map(function(filename) {
    var _filename = filename.split("public")[1];
    _styles +=
      '<link rel="stylesheet" type="text/css" href="./public' +
      _filename +
      '"/>';
  });
  return {
    scripts: _scripts,
    styles: _styles
  };
};
