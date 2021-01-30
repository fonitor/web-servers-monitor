import Base from './base'
import moment from 'moment'
import _ from 'lodash'
import * as config from '../config/err'
import PageCount from '../model/page_count'
import DATE_FORMAT from '../constants/date_format'

const pageCount = new PageCount()

/**
 * 项目
 */
export default class PageController extends Base {
    async getTrend(req, res) {
        let data = req.body || {},
            startTime = data.startTime || moment().format('YYYY-MM-DD 00:00:00'),
            endTime = data.endTime || moment().format('YYYY-MM-DD 23:59:00'),
            app = data.app || "",
            result = {},
            pvLists = [],
            uvLists = []
        
        result.count = await pageCount.getSumTypeCount(startTime, endTime, app)
        // 请求pv/uv
        let lists = await pageCount.getGroupTypeLists(startTime, endTime, app)
        console.log(lists)
        for (let list of lists) {
            let item = {
                time: moment(list.createdAt).format("HH:mm"),
                count: list.count
            }
            if (list.type == config.PAGE_COUNT_PV) {
                pvLists.push(item)
            }
            if (list.type == config.PAGE_COUNT_UV) {
                uvLists.push(item)
            }
        }
        result.pvLists = pvLists
        result.uvLists = uvLists
        return this.send(res, result)
    }
}
