/**
 *
 * 上传文件模块
 * 支持类型【img】
 *
 * **/

import {ApiRes}  from './controllers/index'
import * as Router from 'koa-router'
const upload = new Router();

upload.post('/upload', <any>ApiRes)

export default upload