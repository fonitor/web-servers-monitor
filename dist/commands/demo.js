"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class CommandDemo extends _base.default {
  static get signature() {
    return `
         Command:Demo 
         
         {--onlyFlag:[必传]flag,只有true/false两个值} 
         {--logName=@value:[必传]日志文件名} 
         {--isTest?=@value:[可选]是否处于测试环境}
         `;
  }

  static get description() {
    return '解析kafka日志, 分析pv';
  }

  execute(args, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      let {
        onlyFlag,
        logName,
        isTest
      } = options;

      _this.log(`CommandDemo, onlyFlag=> ${onlyFlag}`);

      _this.log(`CommandDemo, logName=> ${logName}`);

      _this.log(`CommandDemo, isTest=> ${isTest}`); // let i = 0
      // while (1) {
      //   i++
      //   await sleep(1)
      //   this.log(`第${i}条日志`)
      // }

    })();
  }

}

var _default = CommandDemo;
exports.default = _default;