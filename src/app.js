/**
 * Created by flp on 2018/4/12.
 */
// 安装并引入polyfill来转义es7的新api
import babel_co from 'babel-core/register';
import babel_po from 'babel-polyfill';

import Koa from 'koa';
import router from 'koa-simple-router';
import controllerInit from './controller/initController';

import render from 'koa-swig';
import co from 'co';
import serve from 'koa-static';

import CONFIG from './config/config'
const cors = require('koa2-cors');


const app = new Koa();

// 跨域
app.use(cors({
    origin: function(ctx) {
        if (ctx.url === '/test') {
            return false;
        }
        return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

controllerInit.init(app,router); // 初始化路由

app.context.render = co.wrap(render({
    root: CONFIG.get('viewsDir'),
    autoescape: true,
    cache: false, // disable, set to false
    ext: 'html',
    // locals: locals,
    // filters: filters,
    // tags: tags,
    // extensions: extensions
    writeBody: false
}));
app.use(serve(CONFIG.get('staticDir')));
// app.use(async ctx => ctx.body = await ctx.render('index'));


app.listen(CONFIG.get('port'), function () {
    console.log('server is running');
});