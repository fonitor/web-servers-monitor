"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function (req, res, next) {
  res.send({
    title: '测试返回'
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map