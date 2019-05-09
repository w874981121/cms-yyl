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
const schema_fn_1 = require("../../utility/schema.fn");
const config_constants_1 = require("../../config.constants");
const roleSchema = new Mongoose.Schema({
    name: String,
    id: { type: Number, default: 0 },
    rid: [{
            name: String,
            id: { type: Number, default: 0 },
            grade: { type: Number, default: 0 },
        }],
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
roleSchema.pre('save', schema_fn_1.upData("ROLE"));
exports.default = Mongoose.model(config_constants_1.ROLE, roleSchema);
