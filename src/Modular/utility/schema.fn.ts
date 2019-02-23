/**
 *
 *
 * mongodb 数据模型，公用方法
 *
 *
 **/

'use strict';
//数据库写入时间戳更新（公用方法）
export const upData = function (this: any, next: any) {
    if (!this.isNew) {
        this.time.updateAt = Date.now()
    } else {
        this.time.createAt = this.time.updateAt = Date.now();
    }
    next();
}
