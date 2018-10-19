/**
 *
 *
 * 角色数据模型
 *
 * rid: 单角色对多资源
 *
 *
 */

'use strict';

import * as Mongoose from 'mongoose';
import {upData} from "../../utility/schema.fn";

const roleSchema:any = new Mongoose.Schema({
    name: String,
    rid: [],  //对应资源（权限）id
    uid: [],  //对应拥有此角色的用户id
    pid: String,  // 层级关系上级id
    pids: [],   // 所有上级id
    state: Boolean, //当前角色状态，是否可用
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

roleSchema.pre('save', upData);

export default  Mongoose.model('user', roleSchema);
