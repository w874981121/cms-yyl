/**
 * Created wangyanqi
 * Date 2018/5/22
 * GitHub w874981121 ——小小疯
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
// import * as Router from 'koa-router'
const connect_db_1 = require("./mongodb/connect-db");
const log_config_1 = require("./config/log.config");
const router_config_1 = require("./config/router.config");
const Log4js = require("log4js");
const app = new Koa();
const logger = log_config_1.default.getLogger(null);
//接入req日志输出
// log4js.useLogger(app, logger);
app.use(async (ctx, next) => {
    const start = new Date();
    try {
        await next();
        let ms = new Date() - start;
        logger.info("66666-------666666", ms);
        Log4js.connectLogger(logger, {
            format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]' //自定义输出格式
        });
    }
    catch (_a) {
        logger.error("66666-------666666");
    }
});
// app.use(Log4js.connectLogger(logger, {level:'DEBUG'}))
app.use(router_config_1.default.routes()).use(router_config_1.default.allowedMethods());
connect_db_1.default;
// logger.info("111111111");
// logger.error("666666");
// logger.info("666666");
// logger.debug("666666");
// logger.fatal("666666");
app.listen(3000);
