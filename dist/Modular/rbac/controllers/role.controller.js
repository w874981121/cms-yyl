/**
 *
 * 角色相关逻辑
 *
 * */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const role_services_1 = require("../services/role.services");
//添加角色
exports.AddRole = async (ctx, next) => {
    let o = ctx.request.body;
    await role_services_1.default.moAdd(o).then((res) => {
        console.log(res);
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
        };
    });
};
