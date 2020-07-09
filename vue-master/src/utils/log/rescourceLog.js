import Util from "../util"
import * as error from '../config/index'

const util = Util.getInstance()

export default class rescourceLog {
    constructor() {

    }

    /**
     * 单例
     * @return {?}
     */
    static getInstance() {
        if (!rescourceLog.instance) {
            rescourceLog.instance = new rescourceLog()
        }
        return rescourceLog.instance
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

            let resoureErrorInfo = this.resourceErrorInfo(error.RESOURCE_LOAD, sourceUrl, typeName)
            console.log(resoureErrorInfo)
        }, true);
    }

    /**
     * 资源错误监控基础字段（注意内存，使用深拷贝，以免基本信息被改动）
     * @param {*} uploadType 
     * @param {*} sourceUrl 
     * @param {*} typeName 
     */
    resourceErrorInfo(uploadType, sourceUrl, typeName) {
        let obj = JSON.parse(JSON.stringify(util.getCommonProperty()))
        obj.uploadType = uploadType
        obj.errorUrl = sourceUrl
        obj.errorName = typeName;
        obj.browserInfo = '';
        return obj
    }
}