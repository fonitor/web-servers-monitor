"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _env = _interopRequireDefault(require("../configs/env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// mysql 配置。 mysql 使用参见 https://dev.mysql.com/doc/refman/8.0/en/
// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦
// 开发环境配置
const development = {
  /* nomal */
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'web'
}; // 测试环境配置

const testing = development; // 线上环境

const production = testing;
let config = {
  development,
  testing,
  production
};
var _default = config[_env.default];
exports.default = _default;