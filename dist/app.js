/**
 * Created wangyanqi
 * Date 2018/5/22
 * GitHub w874981121 ——小小疯
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Koa = require("koa");
const connect_db_1 = require("./mongodb/connect-db");
const log_config_1 = require("./config/log.config");
const routers_map_1 = require("./routers/routers.map");
const koaBody = require("koa-body");
const app = new Koa();
/**
 *
 *接入req日志输出
 * req ：
 * 输出位置"/logs/reqlog"
 *
 **/
const loggerReq = log_config_1.default.getLogger('db');
const loggerErr = log_config_1.default.getLogger('err');
app.use(async (ctx, next) => {
    const start = new Date();
    try {
        ctx.set("Access-Control-Allow-Origin", "*");
        await next();
        let ms = new Date() - start;
        loggerReq.info("app.ts-接口处理时间：" + ms);
    }
    catch (_a) {
        loggerReq.error("66666-------666666");
    }
});
/**
 *
 * 文件上传插件设置
 *
 * */
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
}));
app.use(routers_map_1.default.routes()).use(routers_map_1.default.allowedMethods());
connect_db_1.default;
app.listen(3000, () => {
    console.log('服务启动成功：http://127.0.0.1:3000');
});
