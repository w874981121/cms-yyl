/**
 *
 * 角色数据库操作
 *
 * */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const count_schema_1 = require("../schema/count_schema");
const CountOperation = {
    counAdd(s) {
        return new Promise((resolve, reject) => {
            count_schema_1.default.findOneAndUpdate({ name: s }, {
                $inc: {
                    cound: 1 //每次自增长1
                }
            }, { upsert: true, new: true }, //设置true 获取的是更新之后的值
            (err, candies) => {
                if (candies) {
                    setTimeout(() => {
                        resolve(candies.cound);
                    }, 1);
                }
                else {
                    reject(err);
                }
            });
        });
    },
};
exports.default = CountOperation;
