"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = require('express');

var router = express.Router();
/**
 * 根据请求方法注册路由
 * @param {*} customerRouter 
 * @param {*} routerConfig 
 * @param {*} url 
 */

function registerRouterByMethod(customerRouter, routerConfig, url) {}
/* GET home page. */


router.get('/', function (req, res, next) {
  res.render('index', {
    title: '测试返回'
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map