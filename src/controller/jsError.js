import Base from './base'
import moment from 'moment'
import _ from 'lodash'
import config from '../config/common'
import ErrorSave from '../common/err_save'

/**
 * js 错误
 */
export default class jsError extends Base {
    /**
     * 保存log
     * @param {*} req 
     * @param {*} res 
     */
    jsCount(req, res) {
        return this.send(res, { title: '获取数据' })
    }
}
