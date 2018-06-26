///<reference path="config/log.config.ts"/>
/**
 * Created wangyanqi
 * Date 2018/5/22
 * GitHub w874981121 ——小小疯
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
// import * as Router from 'koa-router'
const log_config_1 = require("./config/log.config");
const app = new Koa();
const logger = log_config_1.default.getLogger(null);
//接入req日志输出
log_config_1.default.useLogger(app, logger);
app.use(async (ctx) => {
    ctx.body = 'Hello World';
});
logger.error("666666");
logger.info("666666");
logger.debug("666666");
logger.fatal("666666");
app.listen(3000);
