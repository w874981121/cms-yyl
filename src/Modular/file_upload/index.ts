/**
 *
 * 上传文件模块
 * 支持类型【img】
 *
 * **/
import * as Router from 'koa-router'
import {ApiRes}  from './controllers/index'
const upload = new Router();

upload.post('/upload', <any>ApiRes)

export default upload