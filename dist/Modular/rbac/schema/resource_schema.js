/**
 *
 *
 * 资源（权限）数据模型
 *
 *
 *
 * */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const schema_fn_1 = require("../../utility/schema.fn");
const resoureSchema = new Mongoose.Schema({
    name: String,
    rid: [],
    uid: [],
    pid: String,
    pods: [],
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
resoureSchema.pre('save', schema_fn_1.upData);
exports.default = Mongoose.model('user', resoureSchema);
