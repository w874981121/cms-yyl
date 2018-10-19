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

const resoureSchema:any = new Mongoose.Schema({
    name: String,
    rid: [],  //对应资源（权限）id
    uid: [],  //对应拥有此角色的用户id
    pid: String, //资源（权限）上级id
    pods: [],  //所有上级
    state: Boolean, //当前权限状态，是否可用
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

resoureSchema.pre('save', upData);
export default  Mongoose.model('user', resoureSchema);

