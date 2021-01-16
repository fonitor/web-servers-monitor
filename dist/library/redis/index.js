"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redis = _interopRequireDefault(require("../../config/redis"));

var _ioredis = _interopRequireDefault(require("ioredis"));

var _lodash = _interopRequireDefault(require("lodash"));

var _logger = _interopRequireDefault(require("../logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/**
 * @via(@xiaolin)
 * 原生Redis有这么几个问题
 * 1. 命令没有参数提示
 * 2. 连接Redis后不会自动断开, 导致程序无法正常退出
 * 因此, 在这里手工对ioredis进行了一次手工封装, 添加参数提示和链接自动断开逻辑, 方便使用
 * 目前只用到了setex和get方法, 后续有需要可以再添加
 */
class RedisClient {
  /**
   * 初始化
   * @param {*} isTest 
   */
  constructor(isTest = false) {
    var _this = this;

    this.redisClient = new _ioredis.default({
      port: _redis.default.port,
      host: _redis.default.host,
      retryStrategy: hasRetryTimes => {
        // 关闭自动重连功能
        return false;
      },
      lazyConnect: true,
      // 初始化时不能连接Redis Server, 否则会因为无法断开连接, 导致npm run start命令不能退出
      showFriendlyErrorStack: true
    });
    this.isTest = isTest; // 利用debounce限制当连接空闲1s以上时, 自动断开链接, 避免由于持有连接句柄导致进程无法退出

    this._debounceDisconnect = _lodash.default.debounce( /*#__PURE__*/_asyncToGenerator(function* () {
      if (_this.checkIsConnected() == true) {
        yield _this.redisClient.disconnect();

        _this._log(`disconnect success! now connect status change to => ${_this.hasConnected}`);
      }
    }), 1 * 1000);
  }
  /**
   * 判断是否连接
   * @return {?}
   */


  checkIsConnected() {
    let isConnected = _lodash.default.get(this.redisClient, ['connector', 'connecting'], false);

    return isConnected;
  }
  /**
   * 自动重连
   * @return {?}
   */


  _autoConnect() {
    var _this2 = this;

    return _asyncToGenerator(function* () {
      _this2._log('connect: this.hasConnected =>', _this2.hasConnected);

      if (_this2.checkIsConnected() === false) {
        yield _this2.redisClient.connect();

        _this2._log(`connect success! now connect status change to => ${_this2.hasConnected}`);
      }
    })();
  }
  /**
   * 自动断开
   * @return {?}
   */


  _autoDisconnect() {
    var _this3 = this;

    return _asyncToGenerator(function* () {
      yield _this3._debounceDisconnect();
    })();
  }
  /**
   * 打印日志
   * @return {?}
   */


  _log() {
    if (this.isTest) {
      _logger.default.log(...arguments);
    }
  }
  /**
   * 获取key
   * @param {*} key 
   */


  asyncGet(key) {
    var _this4 = this;

    return _asyncToGenerator(function* () {
      yield _this4._autoConnect();
      let resultJson = yield _this4.redisClient.get(key).catch(e => {
        _logger.default.log('Redis异常=>');

        _logger.default.log(e);

        return '';
      });
      yield _this4._autoDisconnect();
      return result;
    })();
  }
  /**
   * 设值
   * @param {*} key 
   * @param {*} expire 
   * @param {*} value 
   */


  asyncSetex(key, expire, value) {
    var _this5 = this;

    return _asyncToGenerator(function* () {
      _this5._autoConnect();

      let valueJSON = JSON.stringify(value);
      let result = yield _this5.redisClient.setex(key, expire, valueJSON).catch(e => {
        _logger.default.log('Redis异常=>');

        _logger.default.log(e);
      });
      yield _this5._autoDisconnect();
      return result;
    })();
  }

}

let client = new RedisClient();
var _default = client;
exports.default = _default;
//# sourceMappingURL=index.js.map