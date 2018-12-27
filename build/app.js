'use strict';

var _register = require('babel-core/register');

var _register2 = _interopRequireDefault(_register);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaSimpleRouter = require('koa-simple-router');

var _koaSimpleRouter2 = _interopRequireDefault(_koaSimpleRouter);

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _config = require('./config/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cors = require('koa2-cors'); /**
                                  * Created by flp on 2018/4/12.
                                  */
// 安装并引入polyfill来转义es7的新api


var app = new _koa2.default();

// 跨域
app.use(cors({
    origin: function origin(ctx) {
        if (ctx.url === '/test') {
            return false;
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}));

_initController2.default.init(app, _koaSimpleRouter2.default); // 初始化路由

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
    root: _config2.default.get('viewsDir'),
    autoescape: true,
    cache: false, // disable, set to false
    ext: 'html',
    // locals: locals,
    // filters: filters,
    // tags: tags,
    // extensions: extensions
    writeBody: false
}));
app.use((0, _koaStatic2.default)(_config2.default.get('staticDir')));
// app.use(async ctx => ctx.body = await ctx.render('index'));


app.listen(_config2.default.get('port'), function () {
    console.log('server is running');
});