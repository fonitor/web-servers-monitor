

/**
 * 定时任务，避免浏览器并发
 */
export default class Query {
    /**
     * 初始化
     * @param {*} options 
     */
    constructor(options) {
        this.isOpen = options.isOpen || false
        // 队列
        this,requestQueue = []
        this.requestTimmer = undefined
        // 队列控制并发数（暂定定5，后续可以根据浏览器io来决定给浏览器不同的策略）
        this.syn = options.syn || 5
        // 版本号
        this.ver = options.ver || '1.0.0'
        super()
    }

}