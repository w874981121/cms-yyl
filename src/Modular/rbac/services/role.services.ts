/**
 *
 * 角色数据库操作
 *
 * */

'use strict';
import ROLE from "../schema/role_schema"

const RoleOperation ={
//新建添加角色
    moAdd(o: any) {
        return new Promise((resolve, reject) => {
            ROLE.create(o, (err: any, candies: any) => {
                if (candies) {
                    setTimeout(() => {
                        resolve(candies)
                    }, 1)
                }
            })
        })
    },

//删除
    moDelete(o: any) {
        return new Promise((resolve, reject) => {
            ROLE.findOneAndRemove(o, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
        })
    },

//修改
//修改 q:检索 u：更新
    moModify(q: any, u: any) {
        return new Promise((resolve, reject) => {
            ROLE.update(q, u, {upsert: true}, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
        })
    },
}

export default RoleOperation