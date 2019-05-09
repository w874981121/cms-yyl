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
import {ROLE} from "../../config.constants"

const roleSchema: any = new Mongoose.Schema({
    name: String,
    id: {type: Number, default: 0},
    rid: [{
        name: String,    //权限名称
        id: {type: Number, default: 0},      //权限的_id
        grade: {type: Number, default: 0},   // 权限的等级
    }],             //拥有的权限列表
    uid: [],        //对应拥有此角色的用户id
    pid: String,    // 层级关系上级id
    pids: [],       // 所有上级id
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

roleSchema.pre('save', upData("ROLE"));

export default Mongoose.model(ROLE, roleSchema);
