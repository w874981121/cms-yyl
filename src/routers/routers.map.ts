/**
 *
 * 根据配置生成接口
 *
 *
 *
 * **/


'use strict';


import config from "./router.config";
import * as Router from "koa-router";

const router = new Router();


//权限模块
import rbac from '../Modular/rbac/controllers/index'
import {ModifyResource} from "../Modular/rbac/controllers/resource.controller";


class mapApi {
    private config: object; //接口路径配置
    private object: any;    //接口对应处理方法

    constructor(c: object, o: any) {
        this.config = c;
        this.object = o;
        this.recursion(this.config)
    }

    apiList() {
        this.recursion(this.config)
    }

    /**
     *
     * routerpath
     *
     * o: 当前需要处理的object
     *
     * */

    recursion(o: any) {
        let _router = new Router();
        Object.keys(o).forEach((path: string) => {
            switch (path) {
                case "/api":
                    router.use(path, this.apiAsync, this.recursion(o[path]).routes());
                    break
                case "/power":
                    _router.use(path, this.powerAsync, this.recursion(o[path]).routes());
                    break
                case "post":
                    let _postObj: any = o[path];
                    Object.keys(_postObj).forEach((name: string) => {
                        _router.post(name, <any>this.object[_postObj[name]]);
                    })
                    break
                case "get":
                    let _getObj: any = o[path];
                    Object.keys(_getObj).forEach((name: string) => {
                        _router.get(name, <any>this.object[_getObj[name]]);
                    })
                    break
                default:
                    _router.use(path, this.defaultSync, this.recursion(o[path]).routes());
                    break
            }
        })
        return _router
    }

    async apiAsync(ctx: any, next: any) {
        console.log("Api")

        console.log("Api")

        ctx.body = ctx.body ? ctx.body : true  //没有任何意义，不知道为啥默认状态404，修改body才会改变状态；
        await next()
    }

    async powerAsync(ctx: any, next: any) {
        console.log("power")
        await next()
    }

    async getSync(ctx: any, next: any) {
        await next();
    }

    async postSync(ctx: any, next: any) {
        await next();
    }

    async defaultSync(ctx: any, next: any) {
        console.log("default")
        await next();
    }

}

new mapApi(config, rbac);

export default router;




