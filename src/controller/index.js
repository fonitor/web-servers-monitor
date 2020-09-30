import Base from './base'
import moment from 'moment'

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
        mq.sendQueueMsg('webLogSave', req.body || {}, (res) => {

        }, (error) => {

        })
        return this.send(res, { title: '测试返回' })
    }
}
