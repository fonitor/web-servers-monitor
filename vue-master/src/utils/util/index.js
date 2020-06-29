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
        this.monitorIp = ''
        this.country = ''
        this.uuid = ''
        this.options = {}
    }

    /**
     * 单例
     * @return {?}
     */
    static getInstance() {
        if (!Util.instance) {
            Util.instance = new Util()
        }
        return Util.instance
    }

    /**
     * 获取设备信息
     * @return {?}
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
     * @return {?}
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
        this.uuid = obj
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

    /**
     * 获取ip地址
     * @param {*} cb 
     */
    getIp(cb) {
        if (this.getCookie('monitor_web_ip')) {
            if (this.isType().isfunction(cb)) {
                cb()
            }
        }
        // 搜狐IP地址查询接口（可设置编码）
        this.loadJs('//pv.sohu.com/cityjson?ie=utf-8', _ => {
            var opt_by = this.monitorIp = returnCitySN ? returnCitySN.cip : "";
            /** @type {string} */
            var urlSafeNodeName = this.country = encodeURIComponent(returnCitySN ? returnCitySN.cname : "");
            /** @type {!Date} */
            var dateExpires = new Date;
            dateExpires.setTime(dateExpires.getTime() + 864e5);
            /** @type {string} */
            document.cookie = "monitor_web_ip=" + opt_by + ";Path=/;domain=;expires=" + dateExpires.toGMTString();
            /** @type {string} */
            document.cookie = "monitor_web_province=" + urlSafeNodeName + ";Path=/;domain=;expires=" + dateExpires.toGMTString();
            if (this.isType().isfunction(cb)) {
                cb()
            }
        }, _ => {
            if (this.isType().isfunction(cb)) {
                cb()
            }
        })
    }

    /**
     * 页面载入js文件
     * @param {*} js 
     * @param {*} callback 
     * @param {*} url 
     */
    loadJs(js, callback, url) {
        /** @type {!Element} */
        var script = document.createElement("script");
        /** @type {number} */
        script.async = 1;
        /** @type {string} */
        script.src = js;
        /** @type {!Function} */
        script.onload = callback;
        if ("function" == typeof url) {
            /** @type {!Function} */
            script.onerror = url;
        }
        /** @type {!Element} */
        var mContainer = document.getElementsByTagName("script")[0];
        return mContainer.parentNode.insertBefore(script, mContainer), mContainer;
    }

    /**
     * 创建一个base-64编码字符串
     * base-64 解码使用方法是 atob() 
     * @param {*} str 
     */
    b64EncodeUnicode(str) {
        try {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (canCreateDiscussions, index) {
                return String.fromCharCode("0x" + index);
            }));
        } catch (e) {
            return str;
        }
    }

    /**
     * http 报错解析
     * @param {*} s 
     * @return {?}
     */
    encryptObj(s) {
        if (this.isType().isArray(s)) {
            /** @type {!Array} */
            var conf_shortcuts_icon = []
            /** @type {number} */
            var i = 0
            for (; i < s.length; ++i) {
                conf_shortcuts_icon[i] = this.encryptObj(s[i])
            }
            return conf_shortcuts_icon
        }
        if (this.isType().isPlainObject(s)) {
            conf_shortcuts_icon = {}
            for (i in s) {
                conf_shortcuts_icon[i] = this.encryptObj(s[i])
            }
            return conf_shortcuts_icon
        }
        return 50 < (s = s + "").length && (s = s.substring(0, 10) + "****" + s.substring(s.length - 9, s.length)), s
    }

    /**
     * 日志通用属性
     */
    getCommonProperty() {
        let logObj = {},
            device = this.device,
            userInfo = (this.options.hasOwnProperty('monitorUser') && util.isType().isPlainObject(this.options.monitorUser)) ? this.options.monitorUser : {}
        logObj.happenTime = new Date().getTime() // 日志发生时间
        logObj.webMonitorId = this.options.WEB_MONITOR_ID || '' // 用于区分应用的唯一标识（一个项目对应一个）
        logObj.simpleUrl = window.location.href.split('?')[0].replace('#', '') // 页面的url
        logObj.customerKey = this.uuid // 用于区分用户，所对应唯一的标识，清理本地数据后失效
        logObj.pageKey = ''  // 用于区分页面，所对应唯一的标识，每个新页面对应一个值
        logObj.deviceName = device.deviceName || '' // 设备名称
        logObj.os = device.os + (device.osVersion ? " " + device.osVersion : "")
        logObj.browserName = device.browserName
        logObj.browserVersion = device.browserVersion
        logObj.monitorIp = this.monitorIp  // 用户的IP地址
        logObj.country = this.country  // 用户所在国家
        // TODO 位置信息, 待处理
        logObj.province = ""  // 用户所在省份
        logObj.city = ""  // 用户所在城市
        // // 用户自定义信息， 由开发者主动传入， 便于对线上进行准确定位
        logObj.userId = userInfo.userId || null
        logObj.firstUserParam = userInfo.firstUserParam || null
        logObj.secondUserParam = userInfo.secondUserParam || null

        return logObj
    }
}

/* eslint-enable */