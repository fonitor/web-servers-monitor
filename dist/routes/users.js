"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var express = require('express');

var router = express.Router();
/* GET users listing. */

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=users.js.map