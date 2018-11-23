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
    console.log(ctx.req.headers);
    console.log("********");
    console.log(ctx.query);
    // ctx.body=ctx.req
    console.log("----------");
};
exports.ApiRes = ApiRes;
const ALL = async (ctx, next) => {
    console.log(ctx);
};
exports.ALL = ALL;
