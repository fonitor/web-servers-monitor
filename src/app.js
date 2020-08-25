/*
Copyright(c)  2017  Lianjia, Inc. All Rights Reserved

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
import '@babel/polyfill'

import path from 'path'
import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
// import indexRouter from './routes/index'
import cors from 'cors'
import appConfig from './config/app'
import Logger from './library/logger'
import bodyParser from 'body-parser'

const startup = () => {
  const app = express()
  
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  // 设置模板引擎为ejs
  app.set('view engine', 'ejs')

  app.use(morgan('dev'))
  // app.use(express.json())
  // app.use(express.urlencoded({ extended: false }))
  // 设置body-parser
  app.use(bodyParser.urlencoded({ extended: false }))
  // 解析json请求
  app.use(bodyParser.json({ extended: false }))
  // 设置cookie-parse
  app.use(cookieParser())
  app.use(express.static(path.join(__dirname, 'public')))

  // app.use('/', indexRouter)

  // 支持前端History模式 => https://router.vuejs.org/zh/guide/essentials/history-mode.html#后端配置例子
  // 将所有404页面均返回index.html
  app.use('*', (req, res) => {
    res.render('index')
  })

  // catch 404 and forward to error handler
  // app.use(function(req, res, next) {
  //   next(createError(404))
  // })

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
  })

  app.set('port', appConfig.port)

  // 支持跨域
  app.use(cors({
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true
  }))

  app.listen(appConfig.port, function() {
    Logger.log(`${appConfig.name} listening on port ${appConfig.port}`)
  })
}


startup()