"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * 上传文件模块
 * 支持类型【img】
 *
 * **/
const Router = require("koa-router");
const index_1 = require("./controllers/index");
const upload = new Router();
upload.post('/upload', index_1.ApiRes);
exports.default = upload;
