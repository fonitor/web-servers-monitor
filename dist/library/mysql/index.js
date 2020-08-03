"use strict";

var _knex = _interopRequireDefault(require("knex"));

var _mysql = _interopRequireDefault(require("../../config/mysql"));

var _logger = _interopRequireDefault(require("../logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Knex = (0, _knex.default)({
  lient: 'mysql',
  connection: {
    host: _mysql.default.host,
    port: _mysql.default.port,
    database: _mysql.default.database,
    user: _mysql.default.user,
    password: _mysql.default.password
  },
  debug: false,
  pool: {
    max: 10,
    min: 0,
    // 由于存在资源池, 导致句柄不被释放, 程序不能退出
    // 因此将最小句柄数设为0, 每100ms检查一次是否有超过120ms未被使用的资源
    // 以便句柄的及时回收
    // free resouces are destroyed after this many milliseconds
    idleTimeoutMillis: 100,
    // how often to check for idle resources to destroy
    reapIntervalMillis: 150
  },
  acquireConnectionTimeout: 60000,
  log: {
    error(message) {
      _logger.default.info(`数据库操作异常 => ${message}`);
    }

  }
});