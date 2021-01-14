import Knex from '../library/mysql'
import moment from 'moment'
import _ from 'lodash'
import Logger from '../library/logger'

import DATE_FORMAT from '../constants/date_format'

const BASE_TABLE_NAME = 'js_count'
const TABLE_COLUMN = [

]

const DISOLAYT_TABLE_COLUMN = [

]

function getTableName() {
    return BASE_TABLE_NAME
}

class JsCountModel {
    constructor() {

    }

    /**
     * 添加js错误信息
     * @param {*} data 
     */
    async addJavascriptError(data) {
        let tableName = getTableName()
        let insertData = {}
        for (let column of [
            'app',
            'type',
            'count',
            'dataTime',
            'createdAt',
            'updatedAt'
        ]) {
            if (_.has(data, [column])) {
                insertData[column] = data[column]
            } else {
                insertData[column] = data[column] || ""
            }
        }
        insertData.createdAt = insertData.createdAt || moment().format('YYYY-MM-DD HH:mm:ss')
        insertData.updatedAt = insertData.updatedAt || moment().format('YYYY-MM-DD HH:mm:ss')
        let insertResult = await Knex.returning('id')
            .insert(insertData)
            .into(tableName)
            .catch(err => {
                console.log(err)
                Logger.log(err.message, 'js_count    add   出错')
                return []
            })
        let id = _.get(insertResult, [0], 0)

        return id > 0
    }

    /**
     * js 错误分页
     * @param {*} params 
     */
    async getJsPages(params) {
        let { startTime, endTime, app, pageSize, page } = params
        let tableName = getTableName()
        let res = await Knex.select('*')
            .from(tableName)
            .where('createdAt', '>', startTime)
            .andWhere('updatedAt', '<', endTime)
            .andWhere('app', app)
            // .limit(pageSize)
            // .offset((page * pageSize) - pageSize)
            .catch(err => {
                console.log(err)
                return []
            })
        
        let lists = []
        for (let item of res) {
            item.createdAt = moment(item.createdAt).format(DATE_FORMAT.DISPLAY_BY_SECOND)
            item.time = moment(item.createdAt).format("HH:mm")
            item.updatedAt = moment(item.updatedAt).format(DATE_FORMAT.DISPLAY_BY_SECOND)
            lists.push(item)
        }

        return lists
    }
}

export default JsCountModel