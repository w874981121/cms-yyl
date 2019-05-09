/**
 *
 *
 * mongodb 数据模型，公用方法
 *
 *
 **/

'use strict';
import CountOperation from "../config_count/services/count_services"

//数据库更新数据写入时间戳更新（公用方法）
export const upData = function (this: any, name: string) {
    let _name: string = name;
    return function (this: any, next: any) {
        if (!this.isNew) {
            this.time.updateAt = Date.now()
        } else {
            this.time.createAt = this.time.updateAt = Date.now();
            CountOperation.counAdd(_name).then((res) => {
                console.log("添加")
                this.id = res
                next();
            }).catch(err => {
                console.log("错误")
            })
        }

    }
}
