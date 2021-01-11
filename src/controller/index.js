import Base from './base'
import moment from 'moment'
import _ from 'lodash'
import config from '../config/common'
import ErrorSave from '../common/err_save'

import RabbitMq from '../library/mq/index'

const mq = new RabbitMq()
const errprSave = new ErrorSave()


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
        data.createdAt = startAt
        data.updatedAt = endAt
        if (config.use.mq) {
            mq.sendQueueMsg('webLogSave', JSON.stringify(data) || {}, (res) => {

            }, (error) => {
    
            })
        }
        if (!config.use.mq) {
            errprSave.save(data)
        }
        
        return this.send(res, { title: '保存成功' })
    }
}
