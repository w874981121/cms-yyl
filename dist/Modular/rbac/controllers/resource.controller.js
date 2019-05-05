/**
 *
 * 权限相关逻辑
 *
 * */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const resource_services_1 = require("../services/resource.services");
// import {debug} from "util";
//添加权限
const AddResource = async (ctx, next) => {
    let o = ctx.request.body;
    await resource_services_1.default.moAdd(o).then((res) => {
        console.log(res);
        if (res.code === "10001") {
            console.log(res);
            ctx.response.body = {
                code: res.code,
                mas: "已存在"
            };
            return;
        }
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
        };
    });
};
exports.AddResource = AddResource;
//查询
const QueryResource = async (ctx, next) => {
    let o = ctx.request.body;
    await resource_services_1.default.moFind(o).then((res) => {
        console.log(typeof res);
        let filter_res = [];
        res.forEach((tem, i) => {
            filter_res.push({
                name: tem.name,
                uid: tem.uid,
                _id: tem._id,
                id: tem.id,
                grade: tem.grade,
                address: tem.address,
                state: tem.state
            });
        });
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
            data: filter_res,
        };
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
