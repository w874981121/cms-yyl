/**
 *
 * 项目接口配置文件
 *
 * 接口命名规范：
 * 新增：add
 * 更新：update
 * 删除：delete
 * 查询：get
 * 迭代：v1
 * 权限验证：power
 *
 * */
'use strict';

const config: object = {
    "/api": {
        "/v1": {
            "/power": {
                "/rbac": {
                    "post": {
                        "addresource": "AddResource",
                        "modifyresource": "ModifyResource"
                    },
                    "get": {
                        "/deleteresource": "DeleteResource",
                        "/queryresources": "QueryResource"
                    }
                }
            }
        }
    }
}

export default config