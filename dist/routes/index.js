"use strict";

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
    title: 'Express'
  });
});
module.exports = router;
//# sourceMappingURL=index.js.map