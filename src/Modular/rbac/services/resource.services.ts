/**
 *
 * 权限数据库操作
 *
 * */

'use strict';

import POWER from "../schema/resource_schema"

const PowerOperation = {
    //添加
    moAdd(o: any) {
        return new Promise((resolve, reject) => {
            POWER.distinct("name").then((res:any)=>{
                if(res.includes(o.name)){
                    return resolve({code:"10001" })//字段重复
                }
                POWER.create(o, (err: any, candies: any) => {
                    if (candies) {
                        setTimeout(() => {
                            resolve(candies)
                        }, 1)
                    }
                })
            }).catch((err:any)=>{
                reject(err)
            })
        })
    },

    batchMoAdd(a: any) {
        POWER.create(a, () => {

        })
    },

    //删除
    moDelete(o: any) {
        return new Promise((resolve, reject) => {
            POWER.findOneAndRemove(o, (err, res) => {
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
            POWER.remove(a, ({err, res}) => {
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
            POWER.update(q, u, {upsert: true}, (err, res) => {
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
        POWER.findByIdAndUpdate(id, u, () => {

        })
    },
    batchMoModify() {
    },

    //查询
    moFind(o: any) {
        return new Promise((resolve, reject) => {
            POWER.find(o, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
        })
    }

}

export default PowerOperation




