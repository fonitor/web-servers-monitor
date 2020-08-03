"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ace = require("@adonisjs/ace");

var _lodash = _interopRequireDefault(require("lodash"));

var _moment = _interopRequireDefault(require("moment"));

var _date_format = _interopRequireDefault(require("../constants/date_format"));

var _logger = _interopRequireDefault(require("../library/logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class Base extends _ace.Command {
  static get signature() {
    return `
            Parse:Base
            
            {--onlyFlag:[必传]flag,只有true/false两个值} 
            {--logName=@value:[必传]日志文件名} 
            {--isTest?=@value:[可选]是否处于测试环境}
        `;
  }

  static get description() {
    return '解析kafka日志, Base';
  }
  /**
   * 在最外层进行一次封装, 方便获得报错信息
   * @param args
   * @param options
   * @returns {Promise<void>}
   */


  handle(args, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.log('command start');

      yield _this.execute(args, options).catch(e => {
        _this.log('catch error');

        _this.log(e.stack);
      });

      _this.log('command finish');
    })();
  }

  execute(args, options) {
    return _asyncToGenerator(function* () {})();
  }
  /**
   * 简易logger
   * @returns  null
   */


  log() {
    var _arguments = arguments,
        _this2 = this;

    return _asyncToGenerator(function* () {
      let message = '';

      for (let rawMessage of _arguments) {
        if (_lodash.default.isString(rawMessage) === false) {
          message = message + JSON.stringify(rawMessage);
        } else {
          message = message + rawMessage;
        }
      }

      let triggerAt = (0, _moment.default)().format(_date_format.default.DISPLAY_BY_MILLSECOND);
      console.log(`[${triggerAt}]-[${_this2.constructor.name}] ` + message);

      let logger = _logger.default.getLogger4Command(_this2.constructor.name);

      logger.info(message);
    })();
  }
  /**
   * 简易logger
   * @returns  null
   */


  warn() {
    var _arguments2 = arguments,
        _this3 = this;

    return _asyncToGenerator(function* () {
      let message = '';

      for (let rawMessage of _arguments2) {
        if (_lodash.default.isString(rawMessage) === false) {
          message = message + JSON.stringify(rawMessage);
        } else {
          message = message + rawMessage;
        }
      }

      let triggerAt = (0, _moment.default)().format(_date_format.default.DISPLAY_BY_MILLSECOND);
      console.warn(`[${triggerAt}]-[${_this3.constructor.name}] ` + message);

      let logger = _logger.default.getLogger4Command(_this3.constructor.name);

      logger.warn(message);
    })();
  }

}

var _default = Base;
exports.default = _default;