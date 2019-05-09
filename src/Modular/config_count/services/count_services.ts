/**
 *
 * 角色数据库操作
 *
 * */

'use strict';
import COUNT from "../schema/count_schema"

const CountOperation = {
    counAdd(s: string) {
        return new Promise((resolve, reject) => {
                COUNT.findOneAndUpdate(
                    {name: s},
                    {
                        $inc: {
                            cound: 1 //每次自增长1
                        }
                    },
                    {upsert: true, new: true},//设置true 获取的是更新之后的值
                    (err: any, candies: any) => {
                        if (candies) {
                            setTimeout(() => {
                                resolve(candies.cound)
                            }, 1)
                        } else {
                            reject(err)
                        }
                    })
            }
        )
    },


}


export default CountOperation
