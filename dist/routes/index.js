"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _router_config_builder = _interopRequireDefault(require("../library/utils/router_config_builder"));

var _api = _interopRequireDefault(require("./api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var router = express.Router();
const withoutLoginRouter = express.Router(); // 路由分为以下部分

let routerConfigMap = _objectSpread({}, _api.default);
/**
 * 根据请求方法注册路由
 * @param {*} routerConfig
 * @param {*} url
 */


function registerRouterByMethod(routerConfig, url) {
  switch (routerConfig.methodType) {
    case _router_config_builder.default.METHOD_TYPE_GET:
      router.get(url, routerConfig.func);
      break;

    case _router_config_builder.default.METHOD_TYPE_POST:
      router.post(url, (req, res) => {
        return routerConfig.func(req, res);
      });
      break;

    default:
  }
}
/* GET home page. */


router.get('/', function (req, res) {
  res.json({
    title: '根路径'
  });
}); // 自动注册

for (let url of Object.keys(routerConfigMap)) {
  let routerConfig = routerConfigMap[url]; // 不需要登录

  registerRouterByMethod(routerConfig, url);
}

var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map