"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//数据库表名称
const POWER = "POWER";
exports.POWER = POWER;
const ROLE = "ROLE";
exports.ROLE = ROLE;
const USER = "USER";
exports.USER = USER;
//消息
const ResultEnum = {
    SUCCESS: { code: 0, message: "成功" },
    REPEAT: { code: 10001, message: "重复" },
    UNKNOWN_ERROR: { code: 100, message: "未知错误" },
    SYSTEM_ERROR: { code: 1000001, message: "系统错误" },
    NEED_LOGIN: { code: 1, message: "未登录" },
    REPEAT_REGISTER: { code: 2, message: "该用户已注册" },
    USER_NOT_EXIST: { code: 3, message: "不存在该用户" },
    PASSWORD_ERROR: { code: 4, message: "密码错误" },
    EMPTY_USERNAME: { code: 5, message: "用户名为空" },
    EMPTY_PASSWORD: { code: 6, message: "密码为空" },
};
exports.ResultEnum = ResultEnum;
