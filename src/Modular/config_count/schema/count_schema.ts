/**
 *
 * 计数库
 * 用来计算每个数据库的数据增量
 *
 */


'use strict';

import * as Mongoose from 'mongoose';
import {COUNT} from "../../config.constants"

const countSchema: any = new Mongoose.Schema({
    name: {type:String},   // 对应数据库表的名称
    cound: {type: Number, default: 0},
    time: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        },
    }
});


export default Mongoose.model(COUNT, countSchema);
