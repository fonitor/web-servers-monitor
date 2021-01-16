"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _base = _interopRequireDefault(require("./base"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// npm run commone Command:Demo user ceshi --onlyFlag false
class CommandDemo extends _base.default {
  static get signature() {
    return `
            Command:Demo 
            {user:[必传]用户名}
            {name?:[可选]称谓}

            {--onlyFlag:[必传]flag,只有true/false两个值} 

         `;
  }

  static get description() {
    return '测试demo';
  }

  execute(args, options) {
    var _this = this;

    return _asyncToGenerator(function* () {
      console.log('测试');
      console.log(args);
      console.log(options);
      let {
        onlyFlag,
        logName,
        isTest
      } = options;

      _this.log(`CommandDemo, onlyFlag=> ${onlyFlag}`); // this.log(`CommandDemo, logName=> ${logName}`)
      // this.log(`CommandDemo, isTest=> ${isTest}`)
      // let i = 0
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
//# sourceMappingURL=demo.js.map