import Util from './util'

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
    }
}
