"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _env = _interopRequireDefault(require("./env"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * === app config ===
 * 项目应用的配置
 * 
 */
const production = {
  name: '小林监控平台开发环境',
  port: 9001,
  proxy: false,
  absoluteLogPath: _path.default.resolve(__dirname, '../', 'log')
}; // 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦
// 开发环境配置

const development = {
  name: '小林监控平台开发环境',
  port: 9001,
  proxy: false,
  absoluteLogPath: _path.default.resolve(__dirname, '../', 'log')
}; // 测试环境配置

const testing = {
  name: '小林监控平台开发环境',
  port: 9001,
  proxy: false,
  absoluteLogPath: _path.default.resolve(__dirname, '../', 'log')
};
let config = {
  development,
  testing,
  production
};
var _default = config[_env.default];
exports.default = _default;
//# sourceMappingURL=app.js.map