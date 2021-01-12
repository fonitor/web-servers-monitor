"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _path = _interopRequireDefault(require("path"));

var _ipipDatx = _interopRequireDefault(require("ipip-datx"));

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 引入ipip-datx模块
// 基于ipip.net提供的地址库数据
// 最后更新时间: 2018-09-19
let ipDatabaseUri = _path.default.resolve(__dirname, './ip2locate_ipip.net_20180910.datx');

let DatabaseClient = new _ipipDatx.default.City(ipDatabaseUri);

function isIp(ip) {
  return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(ip);
}
/**
 * 获取省市区
 * @param {*} ip 
 */


function ip2Locate(ip) {
  let country = '';
  let province = '';
  let city = '';

  if (isIp(ip) === false) {
    return {
      country,
      //  国家
      province,
      //  省
      city //  市

    };
  }

  let res = DatabaseClient.findSync(ip);
  country = _lodash.default.get(res, [0], '');
  province = _lodash.default.get(res, [1], '');
  city = _lodash.default.get(res, [2], '');
  return {
    country,
    //  国家
    province,
    //  省
    city //  市

  };
}

var _default = {
  ip2Locate
};
exports.default = _default;