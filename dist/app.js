"use strict";

require("@babel/polyfill");

var _path = _interopRequireDefault(require("path"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _express = _interopRequireDefault(require("express"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _index = _interopRequireDefault(require("./routes/index"));

var _users = _interopRequireDefault(require("./routes/users"));

var _cors = _interopRequireDefault(require("cors"));

var _app = _interopRequireDefault(require("./config/app"));

var _logger = _interopRequireDefault(require("./library/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
Copyright(c)  2017  Lianjia, Inc. All Rights Reserved

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
const startup = () => {
  const app = (0, _express.default)(); // view engine setup

  app.set('views', _path.default.join(__dirname, 'views')); // 设置模板引擎为ejs

  app.set('view engine', 'ejs');
  app.use((0, _morgan.default)('dev'));
  app.use(_express.default.json());
  app.use(_express.default.urlencoded({
    extended: false
  }));
  app.use((0, _cookieParser.default)());
  app.use(_express.default.static(_path.default.join(__dirname, 'public')));
  app.use('/', _index.default);
  app.use('/users', _users.default); // catch 404 and forward to error handler

  app.use(function (req, res, next) {
    next((0, _httpErrors.default)(404));
  }); // error handler

  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {}; // render the error page

    res.status(err.status || 500);
    res.render('error');
  });
  app.set('port', _app.default.port); // 支持跨域

  app.use((0, _cors.default)({
    origin: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    credentials: true
  }));
  app.listen(_app.default.port, function () {
    _logger.default.log(`${_app.default.name} listening on port ${_app.default.port}`);
  });
};

startup();
//# sourceMappingURL=app.js.map