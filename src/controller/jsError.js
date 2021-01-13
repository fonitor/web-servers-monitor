import Base from './base'
import moment from 'moment'
import _ from 'lodash'
import JavascriptModel from '../model/javascript_model'
import JsCountModel from '../model/js_count_model'

const jsModel = new JavascriptModel()
const jsCountModel = new JsCountModel()

/**
 * js 错误
 */
export default class jsError extends Base {
    /**
     * 获取时间图表
     * @param {*} req 
     * @param {*} res 
     */
    async jsCount(req, res) {
        let data = req.body || {},
            startTime = data.startTime || moment().format('YYYY-MM-DD 00:00:00'),
            endTime = data.endTime || moment().format('YYYY-MM-DD 23:59:00'),
            app = data.app || "",
            result = {}

        // js错误影响用户数
        result.errUserCount = await jsModel.getUserCount(startTime, endTime, app)
        // js 错误总数
        result.jsErrorCount = await jsModel.getJsCount(startTime, endTime, app)
        // 图形数据
        result.jsCount = await jsCountModel.getJsPages({
            startTime,
            endTime,
            app,
            pageSize: data.pageSize || 10,
            page: data.page || 1
        })

        return this.send(res, result)
    }

    /**
     * js错误分页
     * @param {*} req 
     * @param {*} res 
     */
    async getJsList(req, res) {
        let data = req.body || {},
            result = {}
        data.startTime = data.startTime || moment().format('YYYY-MM-DD 00:00:00')
        data.endTime = data.endTime || moment().format('YYYY-MM-DD 23:59:00')
        result.lists = await jsModel.getJsPages(data)
        result.count = await jsModel.getJsCount(data.startTime, data.endTime, data.app)
        return this.send(res, result)
    }

    /**
     * 错误分布
     * @param {*} req 
     * @param {*} res 
     */
    async getJsSpreadCount(req, res) {
        let data = req.body || {},
            result = {}
        data.startTime = data.startTime || moment().format('YYYY-MM-DD 00:00:00')
        data.endTime = data.endTime || moment().format('YYYY-MM-DD 23:59:00')

        // 城市错误分布
        result.provinceError = await jsModel.getProvinceCount(data.startTime, data.endTime, data.app)
        // 版本号错误分布
        result.versionError = await jsModel.getVersionCount(data.startTime, data.endTime, data.app)
        // 设备分布
        result.deviceError = await jsModel.getDeviceCount(data.startTime, data.endTime, data.app)
        return this.send(res, await jsModel.getJsPages(data))
    }
}
