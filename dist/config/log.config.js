/**
 * Created wangyanqi
 * Date 2018/5/29
 * GitHub w874981121 ——小小疯
 *
 * log.config
 *
 * 使用案例
 * 引入
 * const log4js = require('./config/log.config.js');
 * 声明
 * const errlogger = log4js.getLogger('err');  错误日志
 * const othlogger = log4js.getLogger('oth');  全部日志
 * 使用
 * errlogger.error('test error 1');
 * othlogger.info('test info 2');
 *
 *
 * 常用打印等级
 * .trace  追踪
 * .debug  调试
 * .info   信息
 * .warn   警告
 * .error  错误
 * .fatal  致命的
 *
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const Log4js = require("log4js");
const config = {
    replaceConsole: true,
    appenders: {
        stdout: {
            type: 'stdout'
        },
        req: {
            type: 'dateFile',
            filename: 'logs/reqlog/',
            pattern: 'req-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        db: {
            type: 'dateFile',
            filename: 'logs/dblog/',
            pattern: 'req-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        err: {
            type: 'dateFile',
            filename: 'logs/errlog/',
            pattern: 'err-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        oth: {
            type: 'dateFile',
            filename: 'logs/othlog/',
            pattern: 'oth-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: { appenders: ['stdout', 'oth'], level: 'debug' },
        err: { appenders: ['stdout', 'err', 'oth'], level: 'error' },
        oth: { appenders: ['stdout', 'oth'], level: 'info' },
        req: { appenders: ['stdout', 'req', 'oth'], level: 'info' },
        db: { appenders: ['stdout', 'db', 'oth'], level: 'info' },
    }
};
Log4js.configure(config);
/**
 *
 * 引入使用
 * name: 输出权限 对应配置为 "categories:{}"
 * 接收的参数(default，err，oth)
 *
 **/
const getLogger = function (name) {
    return Log4js.getLogger(name || 'oth'); //默认输出 othlog 文件夹
};
/**
 *
 * 接入框架方法:
 * logger: 参数（Log4js.useLogger(自定义配置项)）
 *
 **/
const useLogger = function (app, logger) {
    app.use(Log4js.connectLogger(logger, {
        format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]' //自定义输出格式
    }));
};
exports.default = {
    getLogger,
    useLogger
};
