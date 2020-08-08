"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _log4js = _interopRequireDefault(require("log4js"));

var _moment = _interopRequireDefault(require("moment"));

var _lodash = _interopRequireDefault(require("lodash"));

var _app = _interopRequireDefault(require("../../config/app"));

var _date_format = _interopRequireDefault(require("../../constants/date_format"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let baseLoggerConfig = {
  appenders: {
    // command: {
    //   type: 'dateFile',
    //   filename: `${config.absoluteLogPath}/command/${commandName}`,
    //   pattern: '-yyyy-MM-dd.log',
    //   alwaysIncludePattern: true
    // },
    express: {
      type: 'dateFile',
      filename: `${_app.default.absoluteLogPath}/express/runtime`,
      pattern: '-yyyy-MM-dd.log',
      alwaysIncludePattern: true
    }
  },
  categories: {
    default: {
      appenders: ['express'],
      level: 'info'
    },
    // command: { appenders: ['command'], level: 'info' },
    express: {
      appenders: ['express'],
      level: 'info'
    }
  }
};
/**
 * getLogger会重新打开一个文件, 导致文件句柄打开过多, 系统报错退出, 因此需要人工做一层缓存
 */

let loggerCacheMap = new Map();

function getLogger(loggerType = 'express', loggerConfig = baseLoggerConfig) {
  let loggerConfigJSON = JSON.stringify({
    loggerType,
    loggerConfig
  });

  if (loggerCacheMap.has(loggerConfigJSON)) {
    return loggerCacheMap.get(loggerConfigJSON);
  } else {
    _log4js.default.configure(loggerConfig);

    let logger = _log4js.default.getLogger(loggerType);

    loggerCacheMap.set(loggerConfigJSON, logger);
    return logger;
  }
}
/**
 * 为Commande类提供Logger
 * @param {*} commandName
 */


function getLogger4Command(commandName = 'unsetCommandName') {
  let loggerConfig = {
    appenders: {
      command: {
        type: 'dateFile',
        filename: `${_app.default.absoluteLogPath}/command/${commandName}`,
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: true
      },
      express: {
        type: 'dateFile',
        filename: `${_app.default.absoluteLogPath}/express/runtime`,
        pattern: '-yyyy-MM-dd.log',
        alwaysIncludePattern: true
      }
    },
    categories: {
      default: {
        appenders: ['express'],
        level: 'info'
      },
      command: {
        appenders: ['command'],
        level: 'info'
      },
      express: {
        appenders: ['express'],
        level: 'info'
      }
    }
  };
  return getLogger(`command`, loggerConfig);
}

let logger4Express = getLogger(`express`, baseLoggerConfig);
/**
 * 追踪日志输出文件名,方法名,行号等信息
 * @returns Object
 */

function getStackInfoString() {
  let stackReg = /at\s+(.*)\s+\((.*):(\d*):(\d*)\)/i;
  let stackReg2 = /at\s+()(.*):(\d*):(\d*)/i;
  let stacklist = new Error().stack.split('\n').slice(3);
  let s = stacklist[0];
  let sp = stackReg.exec(s) || stackReg2.exec(s);
  let data = {};

  if (sp && sp.length === 5) {
    data.method = sp[1];
    data.path = sp[2];
    data.line = sp[3];
    data.pos = sp[4];
    data.file = _path.default.basename(data.path);
  }

  return JSON.stringify(data);
}
/**
 * 简易logger
 */


function log() {
  let message = '';

  for (let rawMessage of arguments) {
    if (_lodash.default.isString(rawMessage) === false) {
      message = message + JSON.stringify(rawMessage);
    } else {
      message = message + rawMessage;
    }
  }

  let triggerAt = (0, _moment.default)().format(_date_format.default.DISPLAY_BY_MILLSECOND);
  console.log(`[${triggerAt}]-[runtime] ` + message);
  logger4Express.info(message);
}

let info = log; // 别名

/**
* 简易logger
* @returns  null
*/

function warn() {
  let message = '';

  for (let rawMessage of arguments) {
    if (_lodash.default.isString(rawMessage) === false) {
      message = message + JSON.stringify(rawMessage);
    } else {
      message = message + rawMessage;
    }
  }

  let triggerAt = (0, _moment.default)().format(_date_format.default.DISPLAY_BY_MILLSECOND);
  console.warn(`[${triggerAt}]-[runtime] ` + message + ` => ${getStackInfoString()}`);
  logger4Express.warn(message + ` => ${getStackInfoString()}`);
}
/**
* 简易logger
* @returns  null
*/


function error() {
  let message = '';

  for (let rawMessage of arguments) {
    if (_lodash.default.isString(rawMessage) === false) {
      message = message + JSON.stringify(rawMessage);
    } else {
      message = message + rawMessage;
    }
  }

  let triggerAt = (0, _moment.default)().format(_date_format.default.DISPLAY_BY_MILLSECOND);
  console.error(`[${triggerAt}]-[runtime] ` + message + ` => ${getStackInfoString()}`);
  logger4Express.error(message + ` => ${getStackInfoString()}`);
}

var _default = {
  getLogger4Command,
  log,
  info,
  warn,
  error
};
exports.default = _default;