import Base from './base'
import moment from 'moment'
import _ from 'lodash'
import * as config from '../config/err'
import HttpCountModel from '../model/http_count_model'
import DATE_FORMAT from '../constants/date_format'

const httpCountModel = new HttpCountModel()

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
}
