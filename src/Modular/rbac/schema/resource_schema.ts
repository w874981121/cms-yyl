/**
 *
 *
 * 资源（权限）数据模型
 *
 *
 *
 * */

'use strict';

import * as Mongoose from 'mongoose';
import {upData} from "../../utility/schema.fn";
import {POWER} from "../../config.constants"

const resoureSchema: any = new Mongoose.Schema({
    name: String,
    id: {type: Number, default: 0},
    grade: {type: Number, default: 0},   // 等级
    address: {type: String, default: null},  // 描述
    uid: [{}],  //权限拥有此权限的角色信息
    state: {type: Boolean, default: true}, //当前权限状态，是否可用
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

resoureSchema.pre('POWER', upData);

const MongodbResource = Mongoose.model(POWER, resoureSchema);

export default MongodbResource

