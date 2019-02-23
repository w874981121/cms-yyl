/**
 *
 * 用户数据模型
 *
 * rid： 绑定单一角色
 */


'use strict';

import * as Mongoose from 'mongoose';
import { upData } from '../../utility/schema.fn'

const userSchema: any = new Mongoose.Schema({
    name: String,
    phone: Number,
    user: String,
    password: String,
    rid: String,  //对应角色id
    state: Boolean, //当前用户状态，是否可用
    superadmin: Boolean, //是否为超级管理员
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

userSchema.pre('save', upData);

export default  Mongoose.model('user', userSchema);
