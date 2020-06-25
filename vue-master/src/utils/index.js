import Util from './util'

let util = new Util()

export default class Monitor {
    constructor() {
        // 日志通用属性
        this.logParams = {}
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
    }

    /**
     * 日志通用属性
     */
    setCommonProperty() {
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
    }
}
