import Util from './util'
import * as error from './config/index'

let util = new Util()

export default class Monitor {
    constructor(options) {

        // 初始化框架基础参数
        this.options = util.isType().isPlainObject(options) ? options : {}

        window.onload = () => {
            this.init()
            this.run()
            this.content()
        }
    }

    /**
     * 初始化
     */
    init() {
        // 获取设备信息
        util.getDevice()
        // 存储唯一uuid
        util.getCustomerKey()
        // 存储ip地址
        util.getIp()
        this.rows = window.location.href.split("?")[0].replace("#", "")
        this.createDebugClient = null
        this.current = -1 === window.location.href.indexOf("https") ? "http://" : "https://"
    }

    /**
     * 运行监听
     */
    run() {
        // 监控js
        this.recordJavaScriptError()
        // 资源监控
        this.recordResourceError()
        window.addEventListener('hashchange', (e) => {
            console.log('ceshi1')
            console.log(e)
        })
    }

    /**
     * 启动发送
     */
    content() {
        
    }

    /**
     * 日志通用属性
     */
    getCommonProperty() {
        let logObj = {},
            device = util.device,
            userInfo = this.options.hasOwnProperty('monitorUser') && util.isType().isPlainObject(this.options.monitorUser) ? this.options.monitorUser : {}
        logObj.happenTime = new Date().getTime() // 日志发生时间
        logObj.webMonitorId = this.options.WEB_MONITOR_ID || '' // 用于区分应用的唯一标识（一个项目对应一个）
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
     * js 错误（注意内存，使用深拷贝，以免基本信息被改动）
     * @param {*} uploadType 
     * @param {*} errorMsg 
     * @param {*} errorStack 
     */
    javaScriptErrorInfo(uploadType, errorMsg, errorStack) {
        // 避免原数据错乱
        let obj = JSON.parse(JSON.stringify(this.getCommonProperty()))
        obj.uploadType = uploadType
        obj.errorMessage = encodeURIComponent(errorMsg)
        obj.errorStack = errorStack
        obj.browserInfo = ''
        return obj
    }

    /**
     * 资源报错监控
     * 1）使用script标签的回调方法，在网络上搜索过，看到有人说可以用onerror方法监控报错的情况， 但是经过试验后，发现并没有监控到报错情况，至少在静态资源跨域加载的时候是无法获取的。
     * 2）利用 performance.getEntries()方法，获取到所有加载成功的资源列表，在onload事件中遍历出所有页面资源集合，利用排除法，到所有集合中过滤掉成功的资源列表，即为加载失败的资源。 此方法看似合理，也确实能够排查出加载失败的静态资源，但是检查的时机很难掌握，另外，如果遇到异步加载的js也就歇菜了。
     * 3）添加一个Listener（error）来捕获前端的异常，也是我正在使用的方法，比较靠谱。但是这个方法会监控到很多的error, 所以我们要从中筛选出静态资源加载报错的error, 代码如下：
     */
    recordResourceError() {
        window.addEventListener('error', (e) => {
            let typeName = e.target.localName
            let sourceUrl = ""
            switch (typeName) {
                case 'link':
                    sourceUrl = e.target.href || ''
                    break
                case 'script':
                    sourceUrl = e.target.src || ''
                    break
                case 'img':
                    sourceUrl = e.target.src || ''
                    break
                default:
                    sourceUrl = e.target.src || ''
            }
            if (sourceUrl) sourceUrl = util.b64EncodeUnicode(encodeURIComponent(sourceUrl))

            this.resourceErrorInfo(error.RESOURCE_LOAD, sourceUrl, typeName)
        }, true);
    }

    /**
     * 资源错误监控基础字段（注意内存，使用深拷贝，以免基本信息被改动）
     * @param {*} uploadType 
     * @param {*} sourceUrl 
     * @param {*} typeName 
     */
    resourceErrorInfo(uploadType, sourceUrl, typeName) {
        let obj = JSON.parse(JSON.stringify(this.getCommonProperty()))
        obj.uploadType = uploadType
        obj.errorUrl = sourceUrl
        obj.errorName = typeName;
        obj.browserInfo = '';
        return obj
    }


}
