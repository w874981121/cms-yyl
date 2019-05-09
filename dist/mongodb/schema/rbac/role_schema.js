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
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const public_fn_1 = require("./public.fn");
const roleSchema = new Mongoose.Schema({
    name: String,
    rid: [],
    uid: [],
    pid: String,
    pids: [],
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
roleSchema.pre('save', public_fn_1.upData);
exports.default = Mongoose.model('user', roleSchema);
