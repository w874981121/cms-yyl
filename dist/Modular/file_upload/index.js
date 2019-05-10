"use strict";
/**
 *
 * 上传文件模块
 * 支持类型【img】
 *
 * **/
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./controllers/index");
const Router = require("koa-router");
const upload = new Router();
upload.post('/upload', index_1.ApiRes);
exports.default = upload;
