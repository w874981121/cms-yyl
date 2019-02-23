/**
 *
 * 模块接口文件
 *
 * */

import * as Router from 'koa-router'
import {AddResource, QueryResource, DeleteResource, ModifyResource} from "./controllers/resource.controller"

const resource = new Router();

resource.post('addresource', <any>AddResource)     //添加新的权限
resource.get('queryresources', <any>QueryResource)   //查询权限列表
resource.get('deleteresource', <any>DeleteResource)   //删除权限
resource.post('modifyresource', <any>ModifyResource)  //修改权限

export default resource