import Util from './util'
import * as error from './config/index'

let util = new Util()

export default class Monitor {
    constructor() {
        this.run()
    }

    /**
     * 初始化
     */
    run() {
        // 获取设备信息
        util.getDevice()
        // 存储唯一uuid
        util.getCustomerKey()
        // 存储ip地址
        util.getIp()
        this.rows = window.location.href.split("?")[0].replace("#", "")
        this.createDebugClient = null
        this.current = -1 === window.location.href.indexOf("https") ? "http://" : "https://"
        // 监控js
        this.recordJavaScriptError()

    }

    /**
     * 日志通用属性
     */
    getCommonProperty() {
        let logObj = {},
            device = util.device,
            userInfo = window.monitorUser || {}
        logObj.happenTime = new Date().getTime() // 日志发生时间
        logObj.webMonitorId = window.WEB_MONITOR_ID || '' // 用于区分应用的唯一标识（一个项目对应一个）
        logObj.simpleUrl = window.location.href.split('?')[0].replace('#', '') // 页面的url
        logObj.customerKey = util.uuid // 用于区分用户，所对应唯一的标识，清理本地数据后失效
        logObj.pageKey = ''  // 用于区分页面，所对应唯一的标识，每个新页面对应一个值
        logObj.deviceName = device.deviceName || '' // 设备名称
        logObj.os = device.os + (device.osVersion ? " " + device.osVersion : "")
        logObj.browserName = device.browserName
        logObj.browserVersion = device.browserVersion
        logObj.monitorIp = util.monitorIp  // 用户的IP地址
        logObj.country = util.country  // 用户所在国家
        // TODO 位置信息, 待处理
        logObj.province = ""  // 用户所在省份
        logObj.city = ""  // 用户所在城市
        // // 用户自定义信息， 由开发者主动传入， 便于对线上进行准确定位
        logObj.userId = userInfo.userId || null
        logObj.firstUserParam = userInfo.firstUserParam || null
        logObj.secondUserParam = userInfo.secondUserParam || null

        return logObj
    }

    /**
     * 监控js报错
     * onerror https://segmentfault.com/a/1190000011041164
     */
    recordJavaScriptError() {
        let siftAndMakeUpMessage = (origin_errorMsg, origin_url, origin_lineNumber, origin_columnNumber, origin_errorObj) => {
            let errorMsg = origin_errorMsg ? origin_errorMsg : ''
            let errorObj = origin_errorObj ? origin_errorObj : ''
            let errorType = ""
            if (errorMsg) {
                let errorStackStr = JSON.stringify(errorObj)
                errorType = errorStackStr.split(": ")[0].replace('"', "");
            }
            let javaScriptErrorInfo = this.javaScriptErrorInfo(error.JS_ERROR, errorType + ": " + errorMsg, errorObj)
            console.log(javaScriptErrorInfo)
        }

        let jsMonitorStarted;
        // 重写console.error, 可以捕获更全面的报错信息
        let oldError = console.error;
        console.error = () => {
            // arguments的长度为2时，才是error上报的时机
            // if (arguments.length < 2) return;
            let errorMsg = arguments[0] && arguments[0].message
            let url = util.o
            let lineNumber = 0
            let columnNumber = 0
            let errorObj = arguments[0] && arguments[0].stack
            if (!errorObj) errorObj = arguments[0]
            // 如果onerror重写成功，就无需在这里进行上报了
            !jsMonitorStarted && siftAndMakeUpMessage(errorMsg, url, lineNumber, columnNumber, errorObj)
            return oldError.apply(console, arguments)
        }

        // 重写 onerror 进行jsError的监听
        window.onerror = (errorMsg, url, lineNumber, columnNumber, errorObj) => {
            console.log(errorMsg)
            jsMonitorStarted = true
            let errorStack = errorObj ? errorObj.stack : null
            siftAndMakeUpMessage(errorMsg, url, lineNumber, columnNumber, errorStack)
        }

        
    }

    /**
     * js 错误
     * @param {*} uploadType 
     * @param {*} errorMsg 
     * @param {*} errorStack 
     */
    javaScriptErrorInfo(uploadType, errorMsg, errorStack) {
        // 避免原数据错乱
        let obj = JSON.parse(JSON.stringify(this.getCommonProperty()))
        obj.uploadType = uploadType;
        obj.errorMessage = encodeURIComponent(errorMsg);
        obj.errorStack = errorStack;
        obj.browserInfo = '';
        return obj
    }
}
