/**
 *
 * 权限相关逻辑
 *
 * */

'use strict';
import MongodbResource from "../schema/resource_schema"

import UserOperation from "../services/resource.services"
import {debug} from "util";

//添加权限
export const AddResource = async (ctx: any, next: any) => {
    let o = ctx.request.body;
    console.log(o)
    await UserOperation.moAdd(o).then((res) => {
        console.log(res)
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
        }
    })
}

//查询
export const QueryResource = async (ctx: any, next: any) => {
    let o = ctx.request.body
    await UserOperation.moFind(o).then((res: any) => {
        console.log(typeof res)
        let filter_res: any =[];
        res.forEach((tem: any, i: number) => {
            filter_res.push({
                name: tem.name,
                uid: tem.uid,
                _id: tem._id,
                id: tem.id,
                grade:tem.grade,
                address:tem.address,
                state:tem.state
            })
        })
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
            data: filter_res,
        }
    })
}

//删除
export const DeleteResource = async (ctx: any, next: any) => {
    console.log(ctx.request.query)
    let o = ctx.request.query
    await UserOperation.moDelete(o).then((res) => {
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
            data: res
        }
    })
}

//修改
export const ModifyResource = async (ctx: any, next: any) => {
    let o = ctx.request.body
    await UserOperation.moFind(o).then((res) => {
    })
}
