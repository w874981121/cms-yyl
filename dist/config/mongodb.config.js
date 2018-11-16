"use strict";
/**
 *
 * 数据库配置文件
 * Db_URL： 数据库地址
 * TABLE_TEST：数据库表名称
 **/
Object.defineProperty(exports, "__esModule", { value: true });
const Db_URL = "mongodb://127.0.0.1:27017/admin";
const TABLE_TEST = 'test';
const TABLE_ADMIN = 'admin';
exports.default = {
    Db_URL,
    TABLE_TEST,
    TABLE_ADMIN
};
