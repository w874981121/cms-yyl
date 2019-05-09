/**
 *
 *
 * mongodb 数据模型，公用方法
 *
 *
 **/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const count_services_1 = require("../config_count/services/count_services");
//数据库更新数据写入时间戳更新（公用方法）
exports.upData = function (name) {
    let _name = name;
    return function (next) {
        if (!this.isNew) {
            this.time.updateAt = Date.now();
        }
        else {
            this.time.createAt = this.time.updateAt = Date.now();
            count_services_1.default.counAdd(_name).then((res) => {
                console.log("添加");
                this.id = res;
                next();
            }).catch(err => {
                console.log("错误");
            });
        }
    };
};
