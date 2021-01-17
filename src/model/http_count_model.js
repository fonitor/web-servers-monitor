import Knex from '../library/mysql'
import moment from 'moment'
import _ from 'lodash'
import Logger from '../library/logger'
import DATE_FORMAT from '../constants/date_format'

const BASE_TABLE_NAME = 'http_count'
const TABLE_COLUMN = [

]

const DISOLAYT_TABLE_COLUMN = [

]

function getTableName() {
    return BASE_TABLE_NAME
}

export default class HttpCount {
    constructor() {
    }

    /**
     * 添加http错误信息
     * @param {*} data 
     */
    async addHttpCount(data) {
        let tableName = getTableName()
        let insertData = {}
        for (let column of [
            'app',
            'type',
            'count',
            'status',
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
        let insertResult = await Knex.returning('id')
            .insert(insertData)
            .into(tableName)
            .catch(err => {
                console.log(err)
                Logger.log(err.message, 'http_count    add   出错')
                return []
            })
        let id = _.get(insertResult, [0], 0)

        return id > 0
    }

    /**
     * 获取总和
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} app 
     */
    async getSumTypeCount(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex
            .select('type')
            .sum('count as typeCount')
            .from(tableName)
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .groupBy('type')
            .catch((e) => {
                Logger.warn('查询失败, 错误原因 =>', e)
                return []
            })
        let result = {
            successCount: 0,
            errorCount: 0
        }
        for (let item of res) {
            if (item.type == 1) {
                result.successCount = item.typeCount
            }
            if (item.type == 2) {
                result.errorCount = item.typeCount
            }
        }

        return result
    }

    /**
     * 趋势图
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} app 
     */
    async getGroupTypeLists(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex
            .select('type', 'count', 'createdAt')
            .from(tableName)
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .groupBy('type', 'count', 'createdAt')
            .catch((e) => {
                Logger.warn('查询失败, 错误原因 =>', e)
                return []
            })

        return res
    }
}