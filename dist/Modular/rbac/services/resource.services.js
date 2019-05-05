/**
 *
 * 权限数据库操作
 *
 * */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const resource_schema_1 = require("../schema/resource_schema");
const PowerOperation = {
    //添加
    moAdd(o) {
        return new Promise((resolve, reject) => {
            resource_schema_1.default.distinct("name").then((res) => {
                if (res.includes(o.name)) {
                    return resolve({ code: "10001" }); //字段重复
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
    batchMoAdd(a) {
        resource_schema_1.default.create(a, () => {
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
        resource_schema_1.default.findByIdAndUpdate(id, u, () => {
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
