/**
 *
 * 用户数据库操作
 *
 * */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = require("../schema/user_schema");
const UserOperation = {
    //新建添加角色
    moAdd(o) {
        return new Promise((resolve, reject) => {
            user_schema_1.default.create(o, (err, candies) => {
                if (candies) {
                    setTimeout(() => {
                        resolve(candies);
                    }, 1);
                }
            });
        });
    },
    //删除
    moDelete(o) {
        return new Promise((resolve, reject) => {
            user_schema_1.default.findOneAndRemove(o, (err, res) => {
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
            user_schema_1.default.update(q, u, { upsert: true }, (err, res) => {
                if (res) {
                    setTimeout(() => {
                        resolve(res);
                    }, 1);
                }
            });
        });
    },
};
exports.default = UserOperation;
