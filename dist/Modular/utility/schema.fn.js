/**
 *
 *
 * mongodb 数据模型，公用方法
 *
 *
 **/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
//数据库写入时间戳更新（公用方法）
exports.upData = function (next) {
    if (!this.isNew) {
        this.time.updateAt = Date.now();
    }
    else {
        this.time.createAt = this.time.updateAt = Date.now();
    }
    next();
};
