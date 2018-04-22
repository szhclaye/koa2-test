import Koa from 'koa';
import path from 'path';
import bodyParser from 'koa-bodyparser';
import session from 'koa-session-minimal';
import MysqlStore from 'koa-mysql-session';
import ejs from 'ejs';
import router from 'koa-router';
import views from 'koa-views';
import staticCache from 'koa-static-cache';

import config from '../config/default.js';
const app = new Koa();

/**
 * middleware
 */
app.use(bodyParser());
// 配置静态资源加载中间件
// app.use(koaStatic(
//   path.join(__dirname , './public')
// ))
// 缓存
app.use(
    staticCache(
        path.join(__dirname, './src/public'),
        { dynamic: true },
        {
            maxAge: 365 * 24 * 60 * 60,
        },
    ),
);
app.use(
    staticCache(
        path.join(__dirname, './src/images'),
        { dynamic: true },
        {
            maxAge: 365 * 24 * 60 * 60,
        },
    ),
);

// 配置服务端模板渲染引擎中间件
app.use(
    views(path.join(__dirname, './views'), {
        extension: 'ejs',
    }),
);
app.use(
    bodyParser({
        formLimit: '1mb',
    }),
);



app.use(async(ctx)=>{
    ctx.body = 'Hello';
})

export default app;
