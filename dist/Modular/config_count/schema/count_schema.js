/**
 *
 * 计数库
 * 用来计算每个数据库的数据增量
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const config_constants_1 = require("../../config.constants");
const countSchema = new Mongoose.Schema({
    name: { type: String },
    cound: { type: Number, default: 0 },
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
exports.default = Mongoose.model(config_constants_1.COUNT, countSchema);
