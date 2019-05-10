/**
 *
 * 权限相关逻辑
 *
 * */

'use strict';
import PowerOperation from "../services/resource.services"
import {ResultEnum} from "../../config.constants"

//添加权限
const AddResource = async (ctx: any, next: any) => {
    let o = ctx.request.body;
    await PowerOperation.moAdd(o).then((res: any) => {
        let _obj:object = {}
        console.log(res)
        switch (res.code) {
            case 10001:
                _obj = res
                break
            default:
                _obj = ResultEnum["SUCCESS"]
                break
        }
        ctx.response.body = _obj
        return
    })
}

//查询
const QueryResource = async (ctx: any, next: any) => {
    let o = ctx.request.body
    await PowerOperation.moFind(o).then((res: any) => {
        console.log(res)
        interface Person{
            data: Array<any>
        }
        let filter_res : Person = {data: []}
        if(ctx.response.status === 200){
            res.forEach((tem: any, i: number) => {
                filter_res["data"].push({
                    name: tem.name,
                    uid: tem.uid,
                    _id: tem._id,
                    id: tem.id,
                    grade: tem.grade,
                    address: tem.address,
                    state: tem.state
                })
            })
            filter_res = Object.assign(filter_res,ResultEnum["SUCCESS"])
        }else{
            filter_res =Object.assign(ResultEnum["SYSTEM_ERROR"])
        }
        ctx.response.body = filter_res
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

export  {
    AddResource,
    QueryResource,
    DeleteResource,
    ModifyResource
}

export default {
    AddResource,
    QueryResource,
    DeleteResource,
    ModifyResource
}