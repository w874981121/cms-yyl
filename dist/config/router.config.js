"use strict";
/**
 *
 * 请求初始化配置
 *
 * */
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
//上传文件
const index_1 = require("../Modular/file_upload/index");
const router = new Router();
router.use('/api', index_1.default.routes()).use(index_1.default.allowedMethods());
exports.default = router;
