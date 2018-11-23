/**
 *
 * 请求初始化配置
 *
 * */

import * as Router from 'koa-router'
//上传文件
import upload  from '../Modular/file_upload/index'

const  router= new Router();

router.use('/api', upload.routes()).use(upload.allowedMethods());

export  default  router