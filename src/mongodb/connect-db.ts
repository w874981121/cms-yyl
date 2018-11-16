/*
*
* 连接 MongoDB 数据库
*
*
* */


import * as Mongoose from 'mongoose';
import Config from '../config/mongodb.config'
import log4js from '../config/log.config'
/*
* othlogger 输出全部日志
* errlogger 输出错误日志
*
* */

const othlogger = log4js.getLogger('oth');
const errlogger = log4js.getLogger('error');

Mongoose.connect(Config.Db_URL, {useNewUrlParser: true}, (err) => {
    if(err){
        errlogger.error("数据库报错：" + err)
    }
});

const db = Mongoose.connection;

// 错误捕获
db.on('error', function (error) {
    errlogger.error("数据库错误：" + error)
    Mongoose.disconnect();  //断开
});

// 连接成功
db.once('open', function () {
    othlogger.info("数据库连接成功：6666666")
});

// 断开重启
db.on('close', function () {
    console.log('数据库断开，重新连接数据库');
});

// Mongoose

export default Mongoose

