/**
 * Created wangyanqi
 * Date 2018/5/22
 * GitHub w874981121 ——小小疯
 */
'use strict';

import * as Koa from 'koa';
// import * as Router from 'koa-router'
import MongoClient from "./mongodb/connect-db"
import log4js from './config/log.config'
import router from './config/router.config'
import * as Log4js from "log4js";

const app = new Koa();

const logger = log4js.getLogger(null);

//接入req日志输出
// log4js.useLogger(app, logger);

app.use(async(ctx, next) => {
    const start:any = new Date()
    try {
        await next()
        let ms:any = <any>new Date() - start
        logger.info("66666-------666666", ms)

        Log4js.connectLogger(logger, {
            format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]'//自定义输出格式
        })

    }catch{
        logger.error("66666-------666666")
    }



})
// app.use(Log4js.connectLogger(logger, {level:'DEBUG'}))

app.use(router.routes()).use(router.allowedMethods());

MongoClient;


// logger.info("111111111");
// logger.error("666666");
// logger.info("666666");
// logger.debug("666666");
// logger.fatal("666666");


app.listen(3000);

