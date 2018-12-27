"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _indexModel = require("../models/indexModel");

var _indexModel2 = _interopRequireDefault(_indexModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            * Created by flp on 2018/4/12.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                            */


var indexController = {
  index: function index() {
    var _this = this;

    return function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(ctx, next) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return ctx.render("index.html", {
                  title: "首页-index"
                });

              case 2:
                ctx.body = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  },
  initnum: function initnum() {
    var _this2 = this;

    return function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(ctx, next) {
        var indexMode_;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                indexMode_ = new _indexModel2.default();
                _context2.next = 3;
                return indexMode_.initnum();

              case 3:
                ctx.body = _context2.sent;

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }));

      return function (_x3, _x4) {
        return _ref2.apply(this, arguments);
      };
    }();
  },
  addition: function addition() {
    var _this3 = this;

    return function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(ctx, next) {
        var indexMode_;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                indexMode_ = new _indexModel2.default();
                _context3.next = 3;
                return indexMode_.addition();

              case 3:
                ctx.body = _context3.sent;

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }));

      return function (_x5, _x6) {
        return _ref3.apply(this, arguments);
      };
    }();
  },
  list: function list() {
    var _this4 = this;

    return function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(ctx, next) {
        var indexMode_;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                indexMode_ = new _indexModel2.default();
                _context4.next = 3;
                return indexMode_.list();

              case 3:
                ctx.body = _context4.sent;

              case 4:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }));

      return function (_x7, _x8) {
        return _ref4.apply(this, arguments);
      };
    }();
  }
};

exports.default = indexController;