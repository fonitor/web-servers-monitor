/* eslint-disable */

/**
 * 工具类
 */
export default class Util {
    constructor() {
        let device = {},
            ua = navigator.userAgent
        device.ios = device.android = device.iphone = device.ipad = device.androidChrome = false
        device.isWeixin = /MicroMessenger/i.test(ua)
        device.os = "web"
        device.deviceName = "PC"

        this.device = device
        this.ua = ua
        this.o = (window.location.href, "")
    }

    /**
     * 获取设备信息
     */
    getDevice() {
        let device = this.device,
            ua = this.ua
        /** @type {(Array<string>|null)} */
        let android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
        /** @type {(Array<string>|null)} */
        let showEffects = ua.match(/(iPad).*OS\s([\d_]+)/);
        /** @type {(Array<string>|null)} */
        let showPackageConstants = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        /** @type {(Array<string>|boolean|null)} */
        let showConstants = !showEffects && ua.match(/(iPhone\sOS)\s([\d_]+)/);
        /** @type {(Array<string>|null)} */
        let cache_message = ua.match(/Android\s[\S\s]+Build\//);

        if (android && (device.os = "android", device.osVersion = android[2], device.android = true, device.androidChrome = 0 <= ua.toLowerCase().indexOf("chrome")), (showEffects || showConstants || showPackageConstants) && (device.os = "ios", device.ios = true), showConstants && !showPackageConstants && (device.osVersion = showConstants[2].replace(/_/g, "."), device.iphone = true), showEffects && (device.osVersion = showEffects[2].replace(/_/g, "."), device.ipad = true), showPackageConstants && (device.osVersion = showPackageConstants[3] ? showPackageConstants[3].replace(/_/g, ".") : null, device.iphone = true), device.ios && device.osVersion && 0 <= ua.indexOf("Version/") && "10" === device.osVersion.split(".")[0] && (device.osVersion = ua.toLowerCase().split("version/")[1].split(" ")[0]), device.iphone) {
            /** @type {string} */
            device.deviceName = "iphone";
            var beginWidth = window.screen.width;
            var upperHeight = window.screen.height;
            if (320 === beginWidth && 480 === upperHeight) {
                /** @type {string} */
                device.deviceName = "iphone 4";
            } else {
                if (320 === beginWidth && 568 === upperHeight) {
                    /** @type {string} */
                    device.deviceName = "iphone 5/SE";
                } else {
                    if (375 === beginWidth && 667 === upperHeight) {
                        /** @type {string} */
                        device.deviceName = "iphone 6/7/8";
                    } else {
                        if (414 === beginWidth && 736 === upperHeight) {
                            /** @type {string} */
                            device.deviceName = "iphone 6/7/8 Plus";
                        } else {
                            if (375 === beginWidth && 812 === upperHeight) {
                                /** @type {string} */
                                device.deviceName = "iphone X/S/Max";
                            }
                        }
                    }
                }
            }
        } else {
            if (device.ipad) {
                /** @type {string} */
                device.deviceName = "ipad";
            } else {
                if (cache_message) {
                    /** @type {string} */
                    var d = cache_message[0].split(";")[1].replace(/Build\//g, "");
                    /** @type {string} */
                    device.deviceName = d.replace(/(^\s*)|(\s*$)/g, "");
                }
            }
        }
        if (-1 == ua.indexOf("Mobile")) {
            /** @type {string} */
            let ua = navigator.userAgent.toLowerCase();
            if (device.browserName = "\u672a\u77e5", 0 < ua.indexOf("msie")) {
                /** @type {string} */
                var assignmentUrl = ua.match(/msie [\d.]+;/gi)[0];
                /** @type {string} */
                device.browserName = assignmentUrl.split("/")[0];
                /** @type {string} */
                device.browserVersion = assignmentUrl.split("/")[1];
            }
            if (0 < ua.indexOf("firefox")) {
                /** @type {string} */
                assignmentUrl = ua.match(/firefox\/[\d.]+/gi)[0];
                /** @type {string} */
                device.browserName = assignmentUrl.split("/")[0];
                /** @type {string} */
                device.browserVersion = assignmentUrl.split("/")[1];
            }
            if (0 < ua.indexOf("safari") && ua.indexOf("chrome") < 0) {
                /** @type {string} */
                assignmentUrl = ua.match(/safari\/[\d.]+/gi)[0];
                /** @type {string} */
                device.browserName = assignmentUrl.split("/")[0];
                /** @type {string} */
                device.browserVersion = assignmentUrl.split("/")[1];
            }
            if (0 < ua.indexOf("chrome")) {
                /** @type {string} */
                assignmentUrl = ua.match(/chrome\/[\d.]+/gi)[0];
                /** @type {string} */
                device.browserName = assignmentUrl.split("/")[0];
                /** @type {string} */
                device.browserVersion = assignmentUrl.split("/")[1];
            }
        }

        device.webView = (showConstants || showEffects || showPackageConstants) && ua.match(/.*AppleWebKit(?!.*Safari)/i)

        this.device = Object(this.device, device)

        return this.device;
    }

    /**
     * 判断数据类型
     * util.isType().isArray(……)
     */
    isType() {
        let _obj = {
            isNumeric: 'Number',
            isBoolean: 'Boolean',
            isString: 'String',
            isNull: 'Null',
            isUndefined: 'Undefined',
            isSymbol: 'Symbol',
            isPlainObject: 'Object',
            isArray: 'Array',
            isRegExp: 'RegExp',
            isDate: 'Date',
            isfunction: 'Function',
            isWindow: 'Window'
        }

        let _type = {},
            _toString = _type.toString

        for (var key in _obj) {
            if (!_obj.hasOwnProperty(key)) break
            _type[key] = (function () {
                var reg = new RegExp("^\\[object " + _obj[key] + "\\]$")
                return function anonymous(val) {
                    return reg.test(_toString.call(val))
                }
            })()
        }

        return _type
    }

    /**
     * 判断数据
     * @param {*} obj 
     */
    isBlank(obj) {
        return obj === null || obj === undefined || obj === "";
    }


    /**
     * 解析url中拼接的参数
     * @param url
     * @return {{参数名: string}}
     */
    parseUrlParams(url) {
        if (url.indexOf("?") !== -1) {
            url = url.substr(url.indexOf("?") + 1);
        }
        let paramsArr = url.match(/[^\?\=\&]*\=[^\?\=\&]*/g);
        let params = {};
        if (paramsArr != null) {
            paramsArr.forEach(item => {
                let kv = item.split("=");
                params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
            });
        }
        return params;
    }

    /**
     * 解析url
     * @param {*} url 
     */
    getQueryObject(url) {
        let search = url.substring(url.lastIndexOf("?") + 1),
            obj = {},
            reg = /([^?&=]+)=([^?&=]*)/g,
            base_url = url.split("?")[0]
        search.replace(reg, (rs, $1, $2) => {
            let name = decodeURIComponent($1),
                val = decodeURIComponent($2);
            val = String(val);
            obj[name] = val;
        })

        return {
            baseUrl: base_url,
            query: obj
        }
    }

    /**
   * 组装url 参数
   * @param {*} queryObject 
   */
    makeQuery(queryObject) {
        let query = Object.entries(queryObject)
            .reduce((result, entry) => {
                result.push(entry.join('='))
                return result
            }, []).join('&')
        return `?${query}`
    }

    /**
     * 删除url 指定参数
     * @param {*} name 
     */
    funcUrlDel(name) {
        var loca = location;
        var baseUrl = loca.origin + loca.pathname + "?";
        var query = loca.search.substr(1);
        if (query.indexOf(name) > -1) {
            var obj = {};
            var arr = query.split("&");
            for (var i = 0; i < arr.length; i++) {
                arr[i] = arr[i].split("=");
                obj[arr[i][0]] = arr[i][1];
            }
            delete obj[name];
            var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g, "").replace(/\:/g, "=").replace(/\,/g, "&");
            return url
        }
    }

    /**
     * 修改url指定参数
     * @param {*} paramName 
     * @param {*} replaceWith 
     */
    replaceParamVal(paramName, replaceWith) {
        var oUrl = location.href.toString();
        var re = eval('/(' + paramName + '=)([^&]*)/gi');
        location.href = oUrl.replace(re, paramName + '=' + replaceWith);
        return location.href;
    }


    /**
     * 获取唯一uuid
     */
    getUuid() {
        /** @type {number} */
        var _transactionName = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            /** @type {number} */
            var r = 16 * Math.random() | 0;
            return ("x" == c ? r : 3 & r | 8).toString(16);
        }) + "-" + _transactionName;
    }

    /**
     * @return {?}
     */
    getCustomerKey() {
        var uuid = this.getUuid();
        var obj = this.getCookie("monitorAppKey");
        if (!obj) {
            /** @type {!Date} */
            var dateExpires = new Date;
            dateExpires.setTime(dateExpires.getTime() + 15552e7);
            /** @type {string} */
            document.cookie = "monitorAppKey=" + uuid + ";Path=/;domain=" + this.o + ";expires=" + dateExpires.toGMTString();
            obj = uuid;
        }
        return obj;
    }

    /**
     * 获取cookie
     * @param {*} name 
     */
    getCookie(name) {
        let t;
        /** @type {!RegExp} */
        let re2 = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        return document.cookie.match(re2) ? (t = document.cookie.match(re2), unescape(t[2])) : "";
    }
}

/* eslint-enable */