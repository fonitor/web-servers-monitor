import Util from "../util"
import * as error from '../config/index'

const util = Util.getInstance()

export default class jsLog {

    constructor() {

    }

    /**
     * 单例
     * @return {?}
     */
    static getInstance() {
        if (!jsLog.instance) {
            jsLog.instance = new jsLog()
        }
        return jsLog.instance
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
            // console.log(javaScriptErrorInfo)
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
            // console.log(errorMsg)
            jsMonitorStarted = true
            let errorStack = errorObj ? errorObj.stack : null
            siftAndMakeUpMessage(errorMsg, url, lineNumber, columnNumber, errorStack)
        }
    }

    /**
     * js 错误（注意内存，使用深拷贝，以免基本信息被改动）
     * @param {*} uploadType 
     * @param {*} errorMsg 
     * @param {*} errorStack 
     */
    javaScriptErrorInfo(uploadType, errorMsg, errorStack) {
        // 避免原数据错乱
        let obj = JSON.parse(JSON.stringify(util.getCommonProperty()))
        obj.uploadType = uploadType
        obj.errorMessage = encodeURIComponent(errorMsg)
        obj.errorStack = errorStack
        obj.browserInfo = ''
        return obj
    }


}