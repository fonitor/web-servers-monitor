"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _logger = _interopRequireDefault(require("../library/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  // Logger.log('测试')
  let logger = _logger.default.getLogger4Command('ceshi');

  logger.info('shishis');
  res.render('index', {
    title: '测试返回'
  });
});
var _default = router;
exports.default = _default;
//# sourceMappingURL=index.js.map