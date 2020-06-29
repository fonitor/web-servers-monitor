import Util from "../util"
import * as error from '../config/index'

const util = Util.getInstance()

export default class httpLog {
    constructor() {

    }

    /**
     * 单例
     * @return {?}
     */
    static getInstance() {
        if (!httpLog.instance) {
            httpLog.instance = new httpLog()
        }
        return httpLog.instance
    }

    /**
     * 监听jquery、zepto、自己封装ajax方法报错
     * 我们监听 XMLHttpRequest 对象的两个事件 loadstart， loadend
     * @return {?}
     */
    recordHttpError() {
        let oldXHR = window.XMLHttpRequest

        let ajaxEventTrigger = () => {
            let ajaxEvent = new CustomEvent(event, { detail: this });
            window.dispatchEvent(ajaxEvent);
        }

        let newXHR = () => {
            let realXHR = new oldXHR()
            realXHR.addEventListener('abort', function () { ajaxEventTrigger.call(this, 'ajaxAbort') }, false)
            realXHR.addEventListener('error', function () { ajaxEventTrigger.call(this, 'ajaxError') }, false)
            realXHR.addEventListener('load', function () { ajaxEventTrigger.call(this, 'ajaxLoad') }, false)
            realXHR.addEventListener('loadstart', function () { ajaxEventTrigger.call(this, 'ajaxLoadStart') }, false)
            realXHR.addEventListener('progress', function () { ajaxEventTrigger.call(this, 'ajaxProgress') }, false)
            realXHR.addEventListener('timeout', function () { ajaxEventTrigger.call(this, 'ajaxTimeout') }, false)
            realXHR.addEventListener('loadend', function () { ajaxEventTrigger.call(this, 'ajaxLoadEnd') }, false)
            realXHR.addEventListener('readystatechange', function () { ajaxEventTrigger.call(this, 'ajaxReadyStateChange') }, false)

            // 此处的捕获的异常会连日志接口也一起捕获，如果日志上报接口异常了，就会导致死循环了。
            // realXHR.onerror = function () {
            //   siftAndMakeUpMessage("Uncaught FetchError: Failed to ajax", WEB_LOCATION, 0, 0, {});
            // }
            return realXHR;
        }

        window.XMLHttpRequest = newXHR
        window.addEventListener('ajaxLoadStart', (e) => {
            let tempObj = {
                timeStamp: new Date().getTime(),
                event: e,
                simpleUrl: window.location.href.split('?')[0].replace('#', ''),
                uploadFlag: false,
            }
            this.timeRecordArray.push(tempObj)
        })

        window.addEventListener('ajaxLoadEnd', _ => {
            /** @type {number} */
            let i = 0;
            for (i; i < this.timeRecordArray.length; i++) {
                // uploadFlag == true 代表这个请求已经被上传过了
                if (this.timeRecordArray[i].uploadFlag === true) continue

                if (this.timeRecordArray[i].event.detail.status > 0) {
                    let rType = (this.timeRecordArray[i].event.detail.responseType + "").toLowerCase()
                    if (rType === "blob") {
                        (function (index) {
                            let reader = new FileReader()
                            reader.onload = function () {
                                let responseText = reader.result //内容就在这里
                                this.handleHttpResult(index, responseText)
                            }
                            try {
                                reader.readAsText(this.timeRecordArray[i].event.detail.response, 'utf-8')
                            } catch (e) {
                                this.handleHttpResult(index, this.timeRecordArray[i].event.detail.response + "")
                            }
                        })(i)
                    } else {
                        let responseText = this.timeRecordArray[i].event.detail.responseText
                        this.handleHttpResult(i, responseText)
                    }
                }
            }
        })
    }

    /**
     * http 请求日志包装
     * @param {*} i 
     * @param {*} tempResponseText 
     */
    handleHttpResult(i, tempResponseText) {
        let timeRecordArray = (util.isBlank(this.timeRecordArray) && util.isType().isArray(this.timeRecordArray)) ? this.timeRecordArray : []
        if (!timeRecordArray[i] || timeRecordArray[i].uploadFlag === true) {
            return
        }
        let responseText = ""
        try {
            responseText = tempResponseText ? JSON.stringify(util.encryptObj(JSON.parse(tempResponseText))) : ""
        } catch (e) {
            responseText = ""
        }
        let simpleUrl = timeRecordArray[i].simpleUrl,
            currentTime = new Date().getTime(),
            url = timeRecordArray[i].event.detail.responseURL,
            status = timeRecordArray[i].event.detail.status,
            statusText = timeRecordArray[i].event.detail.statusText,
            loadTime = currentTime - timeRecordArray[i].timeStamp;
        // if (!url || url.indexOf(HTTP_UPLOAD_LOG_API) != -1) return
        // let httpLogInfoStart = new HttpLogInfo(HTTP_LOG, simpleUrl, url, status, statusText, "发起请求", "", timeRecordArray[i].timeStamp, 0)
        // httpLogInfoStart.handleLogInfo(HTTP_LOG, httpLogInfoStart);
        // let httpLogInfoEnd = new HttpLogInfo(HTTP_LOG, simpleUrl, url, status, statusText, "请求返回", responseText, currentTime, loadTime)
        // httpLogInfoEnd.handleLogInfo(HTTP_LOG, httpLogInfoEnd);
        // 当前请求成功后就，就将该对象的uploadFlag设置为true, 代表已经上传了
        timeRecordArray[i].uploadFlag = true
    }
}