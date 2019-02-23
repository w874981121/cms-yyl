/**
 * Created wangyanqi
 * Date 2018/5/22
 * GitHub w874981121 ——小小疯
 */
'use strict';

import Koa = require('koa');
import koaBody = require('koa-body');
import MongoClient from "./mongodb/connect-db";
import log4js from './config/log.config';
import router from './config/router.config';


const app = new Koa();
/**
 *
 *接入req日志输出
 * req ：
 * 输出位置"/logs/reqlog"
 *
 **/
const loggerReq = log4js.getLogger('db');
const loggerErr = log4js.getLogger('err');
app.use(async(ctx, next) => {
    const start:any = new Date()
    try {
        ctx.set("Access-Control-Allow-Origin", "*");
        await next()
        let ms:any = <any>new Date() - start
        loggerReq.info("app.ts-接口处理时间："+ ms)
    }catch{
        loggerReq.error("66666-------666666")
    }
})
/**
 *
 * 文件上传插件设置
 *
 * */
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
    }
}));


app.use(router.routes()).use(router.allowedMethods());

MongoClient;

app.listen(3000,()=>{
    console.log('服务启动成功：http://127.0.0.1:3000');
});

