/**
 *
 * 权限数据库操作
 *
 * */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const resource_schema_1 = require("../schema/resource_schema");
const config_constants_1 = require("../../config.constants");
const PowerOperation = {
    //添加
    moAdd(o) {
        return new Promise((resolve, reject) => {
            resource_schema_1.default.distinct("name").then((res) => {
                if (res.includes(o.name)) {
                    return resolve(config_constants_1.ResultEnum["REPEAT"]); //字段重复
                }
                resource_schema_1.default.create(o, (err, candies) => {
                    if (candies) {
                        setTimeout(() => {
                            resolve(candies);
                        }, 1);
                    }
                });
            }).catch((err) => {
                reject(err);
            });
        });
    },
    //删除
    moDelete(o) {
        return new Promise((resolve, reject) => {
            resource_schema_1.default.findOneAndRemove(o, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res);
                    }, 1);
                }
            });
        });
    },
    //批量删除
    batchMoDelete(a) {
        return new Promise((resolve, reject) => {
            resource_schema_1.default.remove(a, ({ err, res }) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res);
                    }, 1);
                }
            });
        });
    },
    //修改 q:检索 u：更新
    moModify(q, u) {
        return new Promise((resolve, reject) => {
            resource_schema_1.default.update(q, u, { upsert: true }, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res);
                    }, 1);
                }
            });
        });
    },
    //根据id查询修改
    moIdModify(id, u) {
        return new Promise((resolve, reject) => {
            resource_schema_1.default.findByIdAndUpdate(id, u, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res);
                    }, 1);
                }
            });
        });
    },
    batchMoModify() {
    },
    //查询
    moFind(o) {
        return new Promise((resolve, reject) => {
            resource_schema_1.default.find(o, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res);
                    }, 1);
                }
            });
        });
    }
};
exports.default = PowerOperation;
