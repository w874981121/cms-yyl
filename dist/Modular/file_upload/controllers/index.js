"use strict";
/**
 *
 *
 * 文件上传模块———接口模块
 * 2018-11-23
 * 游冶郎
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
/**
 * 上传文件临时存储目录
 * 当前相对路径
 * */
const fike_url = path.join(__dirname, '../../../../upfile/img/');
exports.ApiRes = async (ctx, next) => {
    // 上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    new UpFile(fike_url, file, (path) => {
        console.log("写入成功");
        console.log(path);
    });
    ctx.body = {
        msg: "返回成功",
    };
};
/**
 *
 *  文件上传方法
 *
 * */
class UpFile {
    constructor(path, file, callback) {
        this._path = path;
        this._file = file;
        this._callback = callback;
        this.newFolder();
    }
    /**
     *
     * 上传文件
     *
     * */
    upFile() {
        let that = this;
        let filePath = this._path + `${this._file.name}`;
        // 创建可读流
        const readStream = fs.createReadStream(this._file.path);
        const writeStream = fs.createWriteStream(filePath);
        readStream.on('open', function (fd) {
            console.log('开始读取文件');
        });
        readStream.on('data', function (data) {
            console.log('读取到数据：');
            console.log(data);
        });
        writeStream.on("open", (fd) => {
            console.log('需要被写入的文件已打开');
        });
        readStream.on('end', function () {
            console.log('文件已全部读取完毕');
            //将操作系统缓存区中的数据全部写入文件
            writeStream.end('end', function () {
                console.log('文件全部写入完毕');
                console.log('共写入' + writeStream.bytesWritten + '数据');
                // // 可读流通过管道写入可写流
                if (typeof that._callback === "function")
                    return that._callback(filePath);
            });
        });
        readStream.on('close', function () {
            console.log('文件被关闭');
        });
        readStream.on('error', function (err) {
            console.log('读取文件失败');
        });
    }
    /**
     *
     * 上传文件路径验证
     * 验证是否存在
     * 未存在则创建
     *
     * */
    newFolder() {
        let that = this;
        let exists = fs.existsSync(this._path);
        if (exists) {
            that.upFile();
            return;
        }
        fs.mkdir(fike_url, (err) => {
            if (err) {
                return console.error("创建失败");
            }
            that.upFile();
            return console.info("创建成功");
        });
    }
}
