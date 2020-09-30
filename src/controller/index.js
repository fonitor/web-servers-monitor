import Base from './base'
import moment from 'moment'
import _ from 'lodash'

import RabbitMq from '../library/mq/index'

const mq = new RabbitMq()

/**
 * 保存log
 */
export default class Index extends Base {
    /**
     * 保存log
     * @param {*} req 
     * @param {*} res 
     */
    saveLog(req, res) {
        let data = req.body || {},
            startAt = moment().format('YYYY-MM-DD hh:mm:ss'),
            endAt = moment().format('YYYY-MM-DD hh:mm:ss');
        data.startAt = startAt
        data.endAt = endAt
        mq.sendQueueMsg('webLogSave', JSON.stringify(req.body) || {}, (res) => {

        }, (error) => {

        })
        return this.send(res, { title: '测试返回' })
    }
}
