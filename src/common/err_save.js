import Utils from '../common/utils'
import _ from 'lodash'
import Logger from '../library/logger'
import * as error from '../config/err'
import JavascriptModel from '../model/javascript_error'
const javascriptModel = new JavascriptModel()

export default class ErrorSave {
    constructor() {

    }

    /**
     * 存储错误
     * @param {*} res 
     */
    save(res) {
        let useData = {}
        try {
            useData = JSON.parse(res) || {}
        }catch(err) {
            Logger.log(err.message, '解析错误信息出错')
            return false
        }
        if (!!useData.monitorIp) {
            let ipResult = Utils.getInstance().getIp(useData.monitorIp) || {}
            useData.country = ipResult.country || ""
            useData.province =ipResult.province || ""
            useData.city = ipResult.city
        }
        switch(useData.uploadType) {
            case error.JS_ERROR: 
                javascriptModel.addJavascriptError(useData)
                break;
            default:

        }
    }
}