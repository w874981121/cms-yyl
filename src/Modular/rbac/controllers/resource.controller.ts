/**
 *
 * 权限相关逻辑
 *
 * */

'use strict';
import PowerOperation from "../services/resource.services"
// import {debug} from "util";

//添加权限
const AddResource = async (ctx: any, next: any) => {
    let o = ctx.request.body;
    await PowerOperation.moAdd(o).then((res: any) => {
        console.log(res)
        if(res.code === "10001"){
            console.log(res)
            ctx.response.body={
                code:res.code,
                mas:"已存在"
            }
            return
        }
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
        }
    })
}

//查询
const QueryResource = async (ctx: any, next: any) => {
    let o = ctx.request.body
    await PowerOperation.moFind(o).then((res: any) => {
        console.log(typeof res)
        let filter_res: any = [];
        res.forEach((tem: any, i: number) => {
            filter_res.push({
                name: tem.name,
                uid: tem.uid,
                _id: tem._id,
                id: tem.id,
                grade: tem.grade,
                address: tem.address,
                state: tem.state
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
const DeleteResource = async (ctx: any, next: any) => {
    console.log(ctx.request.query)
    let o = ctx.request.query
    await PowerOperation.moDelete(o).then((res: any) => {
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
            data: res
        }
    })
}

//修改
const ModifyResource = async (ctx: any, next: any) => {
    let o = ctx.request.body
    await PowerOperation.moFind(o).then((res: any) => {

    })
}

export {
    AddResource,
    QueryResource,
    DeleteResource,
    ModifyResource
}