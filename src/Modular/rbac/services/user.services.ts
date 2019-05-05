/**
 *
 * 用户数据库操作
 *
 * */


'use strict';
import USER from "../schema/user_schema"

const UserOperation ={
//新建添加角色
    moAdd(o: any) {
        return new Promise((resolve, reject) => {
            USER.create(o, (err: any, candies: any) => {
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
            USER.findOneAndRemove(o, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
        })
    },

//修改 q:检索 u：更新
    moModify(q: any, u: any) {
        return new Promise((resolve, reject) => {
            USER.update(q, u, {upsert: true}, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
        })
    },
}

export default UserOperation