import Base from './base'
import moment from 'moment'
import _ from 'lodash'
import JavascriptModel from '../model/javascript_model'

const jsModel = new JavascriptModel()

/**
 * js 错误
 */
export default class jsError extends Base {
    /**
     * 保存log
     * @param {*} req 
     * @param {*} res 
     */
    async jsCount(req, res) {
        let startTime = moment().subtract(5, "minutes").format("YYYY-MM-DD HH:mm:00"),
            endTime = moment().format('YYYY-MM-DD hh:mm:00');

        let param = {
            startTime: moment().format('YYYY-MM-DD 00:00:00'), 
            endTime: moment().format('YYYY-MM-DD 23:59:00'),
            app: 'wuc',
            pageSize: 5,
            page: 1
        }

        let ceshi = await jsModel.getJsPages(param)

        console.log(ceshi)
        return this.send(res, {
            items: ceshi
        })
    }
}
