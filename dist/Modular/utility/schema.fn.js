/**
 *
 *
 * mongodb 数据模型，公用方法
 *
 *
 **/
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
//时间更新函数
exports.upData = function (next) {
    if (!this.isNew) {
        this.time.updateAt = Date.now();
    }
    else {
        this.time.createAt = this.time.updateAt = Date.now();
    }
    next();
};
