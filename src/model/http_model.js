import Knex from '../library/mysql'
import _ from 'lodash'
import Logger from '../library/logger'

const BASE_TABLE_NAME = 'http_log_info'
const TABLE_COLUMN = [

]

const DISOLAYT_TABLE_COLUMN = [

]

function getTableName() {
    return BASE_TABLE_NAME
}

export default class HttpLog {
    constructor() {

    }

    /**
     * 添加http错误信息
     * @param {*} data 
     */
    async addHttpLogSave(data) {
        let tableName = getTableName()
        let insertData = {}
        for (let column of [
            'app',
            'type',
            'simpleUrl',
            'customerKey',
            'userId',
            'deviceName',
            'os',
            'browserName',
            'browserVersion',
            'monitorIp',
            'country',
            'province',
            'city',
            'httpUploadType',
            'browserInfo',
            'loadTime',
            'responseText',
            'httpStatus',
            'httpUrl',
            'dataDay',
            'mobileTime',
            'createdAt',
            'updatedAt'
        ]) {
            insertData[column] = data[column] || ""
        }
        let insertResult = await Knex.returning('id')
            .insert(insertData)
            .into(tableName)
            .catch(err => {
                console.log(err)
                Logger.log(err.message, 'resource_error    add   出错')
                return []
            })
        let id = _.get(insertResult, [0], 0)

        return id > 0
    }

    /**
     * 统计一段时间http
     * @param {*} startTime 开始时间
     * @param {*} endTime 结束时间
     * @param {*} app
     */
    async getTypeCount(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .select('app', 'httpUploadType', 'httpStatus')
            .count('* as count')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            // .andWhere('app', app)
            .groupBy(['app', 'httpUploadType', 'httpStatus'])
            .catch(err => {
                console.log(err)
                return []
            })
        return res
    }
}