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

var _path = _interopRequireDefault(require("path"));

var _shelljs = _interopRequireDefault(require("shelljs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

let projectBaseUri = _path.default.resolve(__dirname, '../../'); // 项目所在文件夹


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
  /**
   * 分发日志Parse命令
   * @param {*} commandName 
   * @param {*} startTime 
   * @param {*} endTime 
   */


  dispatchParseCommand(commandName, startTime, endTime) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      _this4.log(`${commandName}任务开始, 处理时间 => ${startTime}, ${endTime}`);

      _this4.execCommand(commandName, [startTime, endTime]);
    })();
  }
  /**
   * 执行脚本
   * @param {*} commandName 
   * @param {*} args 
   */


  execCommand(commandName, args = []) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      let argvString = args.map(arg => {
        return `'${arg}'`;
      }).join('   ');
      let command = `NODE_ENV=production node ${projectBaseUri}/dist/command.js ${commandName}  ${argvString}`;

      _this5.log(`待执行命令=> ${command}`);

      let commandStartAtFormated = (0, _moment.default)().format(_date_format.default.DISPLAY_BY_MILLSECOND);
      let commandStartAtms = (0, _moment.default)().valueOf();

      _shelljs.default.exec(command, {
        async: true,
        silent: true
      }, () => {
        let commandFinishAtFormated = (0, _moment.default)().format(_date_format.default.DISPLAY_BY_MILLSECOND);
        let commandFinishAtms = (0, _moment.default)().valueOf();
        let during = (commandFinishAtms - commandStartAtms) / 1000;

        _this5.log(`${command}命令执行完毕, 共用时${during}秒, 开始执行时间=> ${commandStartAtFormated}, 执行完毕时间=> ${commandFinishAtFormated}`);
      });
    })();
  }

}

var _default = Base;
exports.default = _default;
//# sourceMappingURL=base.js.map