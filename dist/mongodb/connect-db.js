"use strict";
/*
*
* 连接 MongoDB 数据库
*
*
* */
Object.defineProperty(exports, "__esModule", { value: true });
const Mongoose = require("mongoose");
const mongodb_config_1 = require("../config/mongodb.config");
const log_config_1 = require("../config/log.config");
/*
* othlogger 输出全部日志
* errlogger 输出错误日志
*
* */
const othlogger = log_config_1.default.getLogger('oth');
const errlogger = log_config_1.default.getLogger('error');
Mongoose.connect(mongodb_config_1.default.Db_URL, { useNewUrlParser: true }, (err) => {
    if (err) {
        errlogger.error("数据库报错：" + err);
    }
});
const db = Mongoose.connection;
// 监听错误
db.on('error', function (error) {
    errlogger.error("数据库错误：" + error);
    Mongoose.disconnect(); //断开
});
// // 连接成功
db.once('open', function () {
    othlogger.info("数据库连接成功：" + mongodb_config_1.default.Db_URL);
});
// 监听断开
db.on('close', function () {
    console.log('数据库断开');
});
exports.default = Mongoose;
