// 核心模块
const path = require('path');
const fs = require('fs');
// 第三方模块
const express = require('express');
const bodyParser = require('body-parser');
// 自定义模块
const accountRouter = require('./routers/accountRouter');

// 初始化创建 服务器应用程序：http.createServer
const app = express();

// 配置 body-parser 中间件（插件，专门用来解析表单 POST 请求体）
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 在 Express 中开放资源就是一个 API 的事儿
// 公开指定目录
// 只要这样做了，你就可以直接通过 /public/xx 的方式访问 public 目录中的所有资源了
app.use('/css', express.static(path.join(__dirname, './public/css')));
app.use('/js', express.static(path.join(__dirname, './public/')));
app.use('/img', express.static(path.join(__dirname, './public/img')));


// 自定义模块
// router
app.use(accountRouter);


// 相当于 server.listen
app.listen(3001, function () {
    console.log('app is running at port 3001...')
})


