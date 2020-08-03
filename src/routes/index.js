var express = require('express');
var router = express.Router();
import Logger from '../library/logger'

/* GET home page. */
router.get('/', function(req, res, next) {
  // Logger.log('测试')
  let logger = Logger.getLogger4Command('ceshi')
  logger.info('shishis')
  res.render('index', { title: '测试返回' });
});

module.exports = router;
