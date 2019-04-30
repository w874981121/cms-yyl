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
    id: { type: Number, default: 0 },
    grade: { type: Number, default: 0 },
    address: { type: String, default: null },
    uid: [],
    state: { type: Boolean, default: true },
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
resoureSchema.pre('create', schema_fn_1.upData);
const MongodbResource = Mongoose.model('user', resoureSchema);
exports.default = MongodbResource;
