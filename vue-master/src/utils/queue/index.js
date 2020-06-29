import Util from '../util/index'
const util = Util.getInstance()

/**
 * 定时任务，避免浏览器并发
 */
export default class Queue {
    /**
     * 初始化
     * @param {*} options 
     */
    constructor(options) {
        let config = {
            isOpen: true,
            syn: 4,
            ver: '1.0.0'
        }
        // 进行参数合并
        config = (util.isBlank(options) && util.isType().isPlainObject(options)) ? Object.assign(console, options) : config
        
        // 是否开启队列
        this.isOpen = config.isOpen
        // 队列
        this,requestQueue = []
        this.requestTimmer = undefined
        // 队列控制并发数（暂定定5，后续可以根据浏览器io来决定给浏览器不同的策略）
        // https://www.cnblogs.com/sunsky303/p/8862128.html
        this.syn = config.syn
        // 版本号
        this.ver = config.ver
        super()
    }

}