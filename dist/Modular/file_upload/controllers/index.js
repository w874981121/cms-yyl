"use strict";
/**
 *
 *
 * 文件上传模块———接口模块
 * 2018-11-23
 * 游冶郎
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ApiRes = async (ctx, next) => {
    console.log("----------");
    // console.log(ctx.req.connection)
    // console.log( ctx.req.headers)
    console.log("********");
    console.log(ctx.request.body);
    ctx.body = {
        msg: "返回成功",
        data: ctx.request.body,
        params: ctx.query
    };
    console.log("----------");
};
exports.ApiRes = ApiRes;
