/**
 *
 * 权限相关逻辑
 *
 * */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const resource_services_1 = require("../services/resource.services");
const config_constants_1 = require("../../config.constants");
//添加权限
const AddResource = async (ctx, next) => {
    let o = ctx.request.body;
    await resource_services_1.default.moAdd(o).then((res) => {
        let _obj = {};
        console.log(res);
        switch (res.code) {
            case 10001:
                _obj = res;
                break;
            default:
                _obj = config_constants_1.ResultEnum["SUCCESS"];
                break;
        }
        ctx.response.body = _obj;
        return;
    });
};
exports.AddResource = AddResource;
//查询
const QueryResource = async (ctx, next) => {
    let o = ctx.request.body;
    await resource_services_1.default.moFind(o).then((res) => {
        console.log(res);
        let filter_res = { data: [] };
        if (ctx.response.status === 200) {
            res.forEach((tem, i) => {
                filter_res["data"].push({
                    name: tem.name,
                    uid: tem.uid,
                    _id: tem._id,
                    id: tem.id,
                    grade: tem.grade,
                    address: tem.address,
                    state: tem.state
                });
            });
            filter_res = Object.assign(filter_res, config_constants_1.ResultEnum["SUCCESS"]);
        }
        else {
            filter_res = Object.assign(config_constants_1.ResultEnum["SYSTEM_ERROR"]);
        }
        ctx.response.body = filter_res;
    });
};
exports.QueryResource = QueryResource;
//删除
const DeleteResource = async (ctx, next) => {
    console.log(ctx.request.query);
    let o = ctx.request.query;
    await resource_services_1.default.moDelete(o).then((res) => {
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
            data: res
        };
    });
};
exports.DeleteResource = DeleteResource;
//修改
const ModifyResource = async (ctx, next) => {
    let o = ctx.request.body;
    await resource_services_1.default.moFind(o).then((res) => {
    });
};
exports.ModifyResource = ModifyResource;
exports.default = {
    AddResource,
    QueryResource,
    DeleteResource,
    ModifyResource
};
