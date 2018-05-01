/*
 * @Author: fulp 
 * @Date: 2018-05-01 15:43:50 
 * @Last Modified by: fulp
 * @Last Modified time: 2018-05-01 17:45:02
 */
module.exports = function(templateParams) {
  //   var _cssList = ["vendor"];
  var webAssetsHelp = require("./webAssetsHelp.js")(templateParams);

  var _html =
    "{% extends './layout.html' %}" +
    "{% block title %}{{title}}{% endblock %}" +
    "{% block css %}" +
    webAssetsHelp.styles +
    "{% endblock %}" +
    "{% block content %}" +
    '{% include "../widget/index.html" %}' +
    "{% endblock %}" +
    "{% block js %}" +
    "<script src='https://cdn.bootcss.com/jquery/3.2.1/jquery.js'></script>" +
    "<script src='https://cdn.bootcss.com/axios/0.17.1/axios.js'></script>" +
    "<script src='https://cdn.bootcss.com/x-tag/1.5.11/x-tag-core.js'></script>" +
    webAssetsHelp.scripts +
    "{% endblock %}";

  return _html;
};
