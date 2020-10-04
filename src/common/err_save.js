import Utils from '../common/utils'
import _ from 'lodash'
import Logger from '../library/logger'
import * as error from '../config/err'
import JavascriptModel from '../model/javascript_model'
import ResourceModel from '../model/resource_model'

const javascriptModel = new JavascriptModel()
const resourceModel = new ResourceModel()

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
            useData.city = ipResult.city || ""
        }
        switch(useData.uploadType) {
            case error.JS_ERROR: 
                javascriptModel.addJavascriptError(useData)
                break;
            case error.RESOURCE_ERROR:
                resourceModel.addResourceError(useData)
                break;
            default:

        }
    }
}