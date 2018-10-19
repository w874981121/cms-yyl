/**
 *
 *
 * mongodb 数据模型，公用方法
 *
 *
 **/


'use strict';
//时间更新函数
export const upData = function (this: any, next: any) {
    if (!this.isNew) {
        this.time.updateAt = Date.now()
    } else {
        this.time.createAt = this.time.updateAt = Date.now();
    }
    next();
}



