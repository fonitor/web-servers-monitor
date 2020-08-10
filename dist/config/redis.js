"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _env = _interopRequireDefault(require("./env"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// redis 配置。 redis 使用参见 http://devdocs.io/redis/
const development = {
  host: '127.0.0.1',
  port: '6379'
}; // 测试环境配置

const testing = development; // 线上环境配置

const production = testing;
let config = {
  development,
  testing,
  production
};
var _default = config[_env.default];
exports.default = _default;
//# sourceMappingURL=redis.js.map