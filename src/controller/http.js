import Base from './base'
import moment from 'moment'
import _ from 'lodash'
import * as config from '../config/err'
import HttpCountModel from '../model/http_count_model'
import HttpLogModel from '../model/http_model'
import DATE_FORMAT from '../constants/date_format'

const httpCountModel = new HttpCountModel()
const httpLogModel = new HttpLogModel()

/**
 * http
 */
export default class HttpController extends Base {
    /**
     * http 总数
     * @param {*} req 
     * @param {*} res 
     */
    async httpCount(req, res) {
        let data = req.body || {},
            startTime = data.startTime || moment().format('YYYY-MM-DD 00:00:00'),
            endTime = data.endTime || moment().format('YYYY-MM-DD 23:59:00'),
            app = data.app || "",
            result = {},
            errorLists = [],
            successLists = []
        result.count = await httpCountModel.getSumTypeCount(startTime, endTime, app)
        // 请求失败数/成功数
        let lists = await httpCountModel.getGroupTypeLists(startTime, endTime, app)
        for (let list of lists) {
            let item = {
                time: moment(list.createdAt).format("HH:mm"),
                count: list.count
            }
            if (list.type == config.HTTP_TYPE_SUCCESS) {
                successLists.push(item)
            }
            if (list.type == config.HTTP_TYPE_ERROR) {
                errorLists.push(item)
            }
        }
        result.errorLists = errorLists
        result.successLists = successLists
        return this.send(res, result)
    }

    /**
     * 请求明细
     * @param {*} req 
     * @param {*} res 
     */
    async apiList(req, res) {
        let data = req.body || {},
            result = {}
        data.startTime = data.startTime || moment().format('YYYY-MM-DD 00:00:00')
        data.endTime = data.endTime || moment().format('YYYY-MM-DD 23:59:00')
        data.app = data.app || ""

        let lists = await httpLogModel.getApiCountLists(data)
        let httpUrls = []
        for (let list of lists || []) {
            httpUrls.push(list.httpUrl)
        }
        let errorStatusLists = await httpLogModel.getApiStatusError(data.startTime, data.endTime, httpUrls)

        let tableLists = []
        // 错误
        for (let v of lists || []) {
            let item = v
            item.successCount = 0
            item.errorCount = 0
            for (let errorStatus of errorStatusLists || []) {
                if (v.httpUrl == errorStatus.httpUrl && errorStatus.httpStatus == '200') {
                    item.successCount = errorStatus.httpUrlCount
                }
                if (v.httpUrl == errorStatus.httpUrl && errorStatus.httpStatus != '200') {
                    item.errorCount = errorStatus.httpUrlCount
                }
            }
            tableLists.push(item)
        }
        // 请求耗时
        result.lists = tableLists
        result.count = await httpLogModel.getApiCount(data)
        return this.send(res, result)
    }

    /**
     * 错误列表
     * @param {*} req 
     * @param {*} res 
     */
    async apiErrorList(req, res) {
        let data = req.body || {},
            result = {},
            tableLists = []
        data.startTime = data.startTime || moment().format('YYYY-MM-DD 00:00:00')
        data.endTime = data.endTime || moment().format('YYYY-MM-DD 23:59:00')
        data.app = data.app || ""
        
        

        let lists = await httpLogModel.getErrorCountList(data)

        let httpUrls = []
        for (let list of lists || []) {
            httpUrls.push(list.httpUrl)
        }
        // 错误
        for (let v of lists || []) {
            let item = v
            tableLists.push(item)
        }
        result.lists = tableLists
        result.count = await httpLogModel.getErrorCount(data)

        return this.send(res, result)
    }

    /**
     * 错误明细
     * @param {*} req 
     * @param {*} res 
     */
    async getApiErrorStatus(req, res) {
        let data = req.body || {},
            result = {}
        data.startTime = data.startTime || moment().format('YYYY-MM-DD 00:00:00')
        data.endTime = data.endTime || moment().format('YYYY-MM-DD 23:59:00')
        data.app = data.app || ""

        result.statusCount = await httpLogModel.getErrorStatusDetailedCount(data)
        result.errorCount = await httpLogModel.getApiErrorCount(data)
        return this.send(res, result)
    }
}
