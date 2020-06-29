import Util from './util/index'
import jsLog from './log/jsLog'
import rescourceLog from './log/rescourceLog'
import httpLog from './log/httpLog'

const util = Util.getInstance()

export default class Monitor {
    constructor(options) {
       
        // 初始化框架基础参数
        this.options = util.isType().isPlainObject(options) ? options : {}

        window.onload = () => {
            this.init()
            // this.content()
            this.run()
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
        // // http请求
        // this.timeRecordArray = []
    }

    
    /**
     * 运行监听
     */
    run() {
        // 监控js
        jsLog.getInstance().recordJavaScriptError()
        // 资源监控
        rescourceLog.getInstance().recordResourceError()
        // http 请求监控
        httpLog.getInstance().recordHttpError()
        // window.addEventListener('hashchange', (e) => {
        //     console.log('ceshi1')
        //     console.log(e)
        // })
    }

    /**
     * 启动发送 pv
     * @return {?}
     */
    content() {

    }

}
