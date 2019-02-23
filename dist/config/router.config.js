"use strict";
/**
 *
 * 请求初始化配置
 *
 * */
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const router = new Router();
//上传文件模块
const index_1 = require("../Modular/file_upload/index");
router.use('/api', index_1.default.routes()); //接口并入路由
//权限模块
const router_1 = require("../Modular/rbac/router");
router.use('/rbac/', async (ctx, next) => {
    /**
     *
     * 参数效验未完成
     *
     **/
    ctx.body = ctx.body ? ctx.body : true; //没有任何意义，不知道为啥默认状态404，修改body才会改变状态；
    await next();
}, router_1.default.routes()); //接口并入路由
exports.default = router;
