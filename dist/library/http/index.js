'use strict';
/**
 * 统一获取http数据
 * Created by yaoze on 2017/2/17.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _queryString = _interopRequireDefault(require("query-string"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 创建axios实例
let http = _axios.default.create();
/**
 * post form表单
 * @param {string} url
 * @param {object} formData
 * @param {object} config
 */


function postForm(url, formData = {}, config = {}) {
  return http.post(url, _queryString.default.stringify(formData), _objectSpread(_objectSpread({}, config), {}, {
    headers: _objectSpread({
      'Content-Type': 'application/x-www-form-urlencoded'
    }, _lodash.default.get(config, ['headers'], {}))
  }));
}

http.postForm = postForm;
var _default = http;
exports.default = _default;
//# sourceMappingURL=index.js.map