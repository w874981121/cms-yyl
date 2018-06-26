/**
 * Created wangyanqi
 * Date 2018/5/29
 * GitHub w874981121 ——小小疯
 *
 * log.config
 *
 * 使用案例
 * const log4js = require('./config/log.config.js');
 * const errlogger = log4js.getLogger('err');
 * const othlogger = log4js.getLogger('oth');
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

import * as Log4js from 'log4js';

const config: object = {
    replaceConsole: true,
    appenders: {
        stdout: {//控制台输出
            type: 'stdout'
        },
        req: {//请求日志
            type: 'dateFile',
            filename: 'logs/reqlog/',
            pattern: 'req-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        err: {//错误日志
            type: 'dateFile',
            filename: 'logs/errlog/',
            pattern: 'err-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        },
        oth: {//其他日志
            type: 'dateFile',
            filename: 'logs/othlog/',
            pattern: 'oth-yyyy-MM-dd-hh.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {appenders: ['stdout', 'req'], level: 'debug'},  //appenders 绑定输出
        err: {appenders: ['stdout', 'err'], level: 'error'},
        oth: {appenders: ['stdout', 'oth'], level: 'info'}
    }
};

Log4js.configure(<any>config);

/**
 *
 * 引入使用
 * name: 输出权限 对应配置为 "categories:{}"
 * 接收的参数(default，err，oth)
 *
 **/

const getLogger = function (name: any) {
    return Log4js.getLogger(name || 'default')
};

/**
 *
 * 接入框架:
 * logger: 参数（Log4js.getLogger(自定义配置项)）
 *
 **/

const useLogger = function (app: any, logger: any) {//koa   接入自定义输出格式
    app.use(Log4js.connectLogger(logger || Log4js.getLogger('default'), {
        format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]'//自定义输出格式
    }))
};

export default {
    getLogger,
    useLogger
}
