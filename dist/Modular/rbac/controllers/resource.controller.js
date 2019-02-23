/**
 *
 * 权限相关逻辑
 *
 * */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const resource_services_1 = require("../services/resource.services");
//添加权限
exports.AddResource = async (ctx, next) => {
    let o = ctx.request.body;
    console.log(o);
    await resource_services_1.default.moAdd(o).then((res) => {
        console.log(res);
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
            data: res,
        };
    });
};
//查询
exports.QueryResource = async (ctx, next) => {
    let o = ctx.request.body;
    await resource_services_1.default.moFind(o).then((res) => {
        console.log(typeof res);
        let filter_res = [];
        res.forEach((tem, i) => {
            filter_res.push({
                name: tem.name,
                uid: tem.uid,
                _id: tem._id,
                id: tem.id
            });
        });
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
            data: filter_res,
            res: res
        };
    });
};
//删除
exports.DeleteResource = async (ctx, next) => {
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
//修改
exports.ModifyResource = async (ctx, next) => {
    let o = ctx.request.body;
    await resource_services_1.default.moFind(o).then((res) => {
    });
};
