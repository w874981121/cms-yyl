"use strict";
/**
 *
 * 模块接口文件
 *
 * */
Object.defineProperty(exports, "__esModule", { value: true });
const Router = require("koa-router");
const resource_controller_1 = require("./controllers/resource.controller");
const resource = new Router();
resource.post('addresource', resource_controller_1.AddResource); //添加新的权限
resource.get('queryresources', resource_controller_1.QueryResource); //查询权限列表
resource.get('deleteresource', resource_controller_1.DeleteResource); //删除权限
resource.post('modifyresource', resource_controller_1.ModifyResource); //修改权限
exports.default = resource;
