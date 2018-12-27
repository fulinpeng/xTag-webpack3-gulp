"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by flp on 2018/4/12.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _requestPromise = require("request-promise");

var _requestPromise2 = _interopRequireDefault(_requestPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var indexModel = function () {
  function indexModel() {
    _classCallCheck(this, indexModel);
  }

  _createClass(indexModel, [{
    key: "initnum",
    value: function initnum() {
      return new Promise(function (reselve, reject) {
        (0, _requestPromise2.default)({
          uri: "http://localhost:8888/practice/conmysql/initnum.php",
          method: "GET"
        }).then(function (data) {
          var result = JSON.parse(data);
          if (data) {
            reselve(result);
          } else {
            reject({});
          }
        });
      });
    }
  }, {
    key: "addition",
    value: function addition() {
      return new Promise(function (reselve, reject) {
        (0, _requestPromise2.default)({
          uri: "http://localhost:8888/practice/conmysql/praise.php",
          method: "GET"
        }).then(function (data) {
          var result = JSON.parse(data);
          if (data) {
            reselve(result);
          } else {
            reject({});
          }
        });
      });
    }
  }, {
    key: "list",
    value: function list() {
      return new Promise(function (reselve, reject) {
        (0, _requestPromise2.default)({
          uri: "http://192.168.0.162:57002/task/list",
          method: "GET"
        }).then(function (data) {
          console.log('@@@@@@@@-success', data);
          // const result = JSON.parse(data);
          if (data) {
            reselve(data);
          } else {
            reject({});
          }
        }, function (err) {
          console.log('########-err', err);
          if (err) {
            reselve(err);
          } else {
            reject({});
          }
        });
      });
    }
  }]);

  return indexModel;
}();

exports.default = indexModel;