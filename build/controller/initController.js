'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _indexController = require('./indexController');

var _indexController2 = _interopRequireDefault(_indexController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var controllerInit = {
    init: function init(app, router) {
        app.use(router(function (_) {
            _.get('/', _indexController2.default.index());
            _.get('/index/initnum', _indexController2.default.initnum());
            _.get('/index/addition', _indexController2.default.addition());
        }));
    }
}; /**
    * Created by flp on 2018/4/12.
    */
exports.default = controllerInit;