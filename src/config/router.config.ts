/**
 *
 * 请求初始化配置
 *
 * */

import Router = require('koa-router')

const router = new Router();

//上传文件模块
import upload from '../Modular/file_upload/index'

router.use('/api', upload.routes())  //接口并入路由

//权限模块
import resource from '../Modular/rbac/router'

router.use('/rbac/',async (ctx: any, next: any) => {
    /**
     *
     * 参数效验未完成
     *
     **/
    ctx.body = ctx.body?ctx.body:true  //没有任何意义，不知道为啥默认状态404，修改body才会改变状态；
    await next()
}, resource.routes())  //接口并入路由


export default router