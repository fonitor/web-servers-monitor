var express = require('express');
var router = express.Router();
import Logger from '../library/logger'

/* GET home page. */
router.get('/', function(req, res, next) {
  Logger.log('测试')
  res.render('index', { title: 'Express' });
});

module.exports = router;
