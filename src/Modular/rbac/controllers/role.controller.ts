/**
 *
 * 角色相关逻辑
 *
 * */
'use strict';
import RoleOperation from "../services/role.services"

//添加角色
export const AddRole = async (ctx: any, next: any) => {
    let o = ctx.request.body;
    await RoleOperation.moAdd(o).then((res: any) => {
        console.log(res)
        ctx.response.body = {
            code: ctx.response.status,
            msg: ctx.response.message,
        }
    })
}
