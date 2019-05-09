/**
 *
 * 用户数据模型
 *
 * rid： 绑定单一角色
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const public_fn_1 = require("./public.fn");
const userSchema = new Mongoose.Schema({
    name: String,
    phone: Number,
    user: String,
    password: String,
    rid: String,
    state: Boolean,
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
userSchema.pre('save', public_fn_1.upData);
exports.default = Mongoose.model('user', userSchema);
