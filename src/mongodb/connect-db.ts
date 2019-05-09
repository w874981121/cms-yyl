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

// 监听错误
db.on('error', function (error) {
    errlogger.error("数据库错误：" + error)
    Mongoose.disconnect();  //断开
});

// // 连接成功
db.once('open', function () {
    othlogger.info("数据库连接成功："+Config.Db_URL)
});

// 监听断开
db.on('close', function () {
    console.log('数据库断开');
});


export default Mongoose

