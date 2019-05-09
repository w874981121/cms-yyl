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

const resoureSchema: any = new Mongoose.Schema({
    name: String,
    id: {type: Number, default: 0},
    uid: Array,  //权限拥有此角色的id
    grade:{type: Number, default: 2},     // 权限等级
    state:{type: Boolean, default: true}, //权限开启关闭
    address:{type: String, default: ""},
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

resoureSchema.pre('create', upData);

const MongodbResource = Mongoose.model('user', resoureSchema);

export default MongodbResource

