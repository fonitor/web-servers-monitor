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
     * 添加js错误信息
     * @param {*} data 
     */
    async addHttpLogSave(data) {
        let tableName = getTableName()
        let insertData = {}
        for (let column of [
            'simpleUrl',
            'customerKey',
            'pageKey',
            'deviceName',
            'os',
            'browserName',
            'browserVersion',
            'monitorIp',
            'country',
            'province',
            'city',
            'uploadType',
            'browserInfo',
            'loadTime',
            'responseText',
            'status',
            'statusText',
            'createdAt',
            'updatedAt'
        ]) {
            if (_.has(data, [column])) {
                insertData[column] = data[column]
            }
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
}