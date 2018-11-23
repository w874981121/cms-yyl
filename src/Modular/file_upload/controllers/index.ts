/**
 *
 *
 * 文件上传模块———接口模块
 * 2018-11-23
 * 游冶郎
 *
 */

const ApiRes = async (ctx: any, next: any) => {
    console.log("----------")
    // console.log(ctx.req.connection)
    console.log( ctx.req.headers)
    console.log("********")
    console.log( ctx.query)
    // ctx.body=ctx.req
    console.log("----------")
}

const ALL = async (ctx: any, next: any) => {
    console.log(ctx
    )
}

export {ApiRes, ALL}
