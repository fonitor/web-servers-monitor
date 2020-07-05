/* eslint-disable */
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
            synRequestNum: 4,
            ver: '1.0.0'
        }
        // 进行参数合并
        config = (util.isBlank(options) && util.isType().isPlainObject(options)) ? Object.assign(console, options) : config

        // 是否开启队列
        this.isOpen = config.isOpen
        // 队列
        this.requestQueue = []
        this.requestTimmer = undefined
        // 队列控制并发数（暂定定4，后续可以根据浏览器io来决定给浏览器不同的策略）
        // https://www.cnblogs.com/sunsky303/p/8862128.html
        this.synRequestNum = util.isBlank(config.synRequestNum) ? config.synRequestNum : 4
        // 版本号
        this.ver = config.ver
        this.synNum = 0
    }

    /**
     * 单例
     * @param {*} option config配置
     * @return {?}
     */
    static getInstance(option) {
        if (!Queue.instance) {
            Queue.instance = new Queue(option)
        }
        return Queue.instance
    }

    /**
     * 同步队列
     * @param {*} log 队列日志 
     */
    pushToQueue(log) {
        {
            // var n = this.requestQueue && this.requestQueue.length
            // 简单先同步放入数组中
            this.requestQueue.push(log)
            return this.onReady(() => {
                this.requestTimmer = this.delay(() => {
                    this.clear()
                }, this.requestQueue[0] && (!!this.requestQueue[0].uploadType && this.requestQueue[0].uploadType == 'error') ? 3e3 : -1)
            })
        }
    }

    /**
     * 宏任务（检测是否有唯一对应值）
     * @param {*} fun 
     */
    onReady(fun) {
        // TOODO 检测是否有唯一项目id 没有则不上报
        if (util.isType().isfunction(fun)) {
            fun()
        }
    }

    /**
     * 执行队列
     * @param {*} fun 
     * @param {*} e 
     */
    delay(fun, e) {
        if (!util.isType().isfunction(fun)) return null
        return e === -1 ? (fun(), null) : setTimeout(fun, e || 0)
    }

    /**
     * 并发限制
     * @return {?}
     */
    clear() {
        var e
        if (this.synNum > this.synRequestNum) {
            return clearTimeout(this.requestTimmer), this.requestTimmer = setTimeout(() => {
                this.clear()
            }, 50)
        }
        for (clearTimeout(this.requestTimmer), this.requestTimmer = null; this.synNum < this.synRequestNum && (e = this.requestQueue.pop()); this.synNum++) {
            e.handleLog(this.reduceSynNumFun)
        }
        // 执行完如果还有数据则继续执行（放到宏任务）
        !!this.requestQueue.length && (this.requestTimmer = setTimeout(() => {
            this.clear()
        }, 50))

    }

    /**
     * 清空队列
     * @return {?}
     */
    clearAll() {
        this.requestQueue = []
        this.requestTimmer = null
        this.synNum = 0
    }

    /**
     * 并发数减一
     * @return {?}
     */
    reduceSynNumFun() {
        Queue.instance.synNum--
        return this
    }

}

/* eslint-enable */