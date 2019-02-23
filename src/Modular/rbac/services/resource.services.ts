/**
 *
 * 权限数据库操作
 *
 * */

'use strict';

import MoUser from "../schema/resource_schema"

const UserOperation = {
    //添加
    moAdd(o: any) {
        return new Promise((resolve, reject) => {
            MoUser.create(o, (err: any, candies: any) => {
                if (candies) {
                    setTimeout(() => {
                        resolve(candies)
                    }, 1)
                }
            })
        })
    },
    batchMoAdd(a: any) {
        MoUser.create(a, () => {

        })
    },

    //删除
    moDelete(o: any) {
        return new Promise((resolve, reject) => {
            MoUser.findOneAndRemove(o, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
        })
    },
    batchMoDelete(a: any) {
        return new Promise((resolve, reject) => {
            MoUser.remove(a, ({err, res}) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
        })
    },

    //修改 q:检索    u：更新
    moModify(q: any, u: any) {
        return new Promise((resolve, reject) => {
            MoUser.update(q, u, {upsert: true}, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
        })
    },
    //根据id查询修改
    moIdModify(id: number, u: any) {
        MoUser.findByIdAndUpdate(id, u, () => {

        })
    },
    batchMoModify() {
    },

    //查询
    moFind(o: any) {
        return new Promise((resolve, reject) => {
            MoUser.find(o, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
        })
    }

}

export default UserOperation




