/**
 *
 * 权限数据库操作
 *
 * */

'use strict';

import POWER from "../schema/resource_schema"
import {ResultEnum} from "../../config.constants"

const PowerOperation = {
    //添加
    moAdd(o: any) {
        return new Promise((resolve, reject) => {
            POWER.distinct("name").then((res: any) => {
                if (res.includes(o.name)) {
                    return resolve(ResultEnum["REPEAT"])  //字段重复
                }
                POWER.create(o, (err: any, candies: any) => {
                    if (candies) {
                        setTimeout(() => {
                            resolve(candies)
                        }, 1)
                    }
                })
            }).catch((err: any) => {
                reject(err)
            })
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

    //批量删除
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
        return new Promise((resolve, reject) => {
            POWER.findByIdAndUpdate(id, u, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res)
                    }, 1)
                }
            })
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




