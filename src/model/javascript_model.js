import Knex from '../library/mysql'
import moment from 'moment'
import _ from 'lodash'
import Logger from '../library/logger'

const BASE_TABLE_NAME = 'javascript_error_info'
const TABLE_COLUMN = [

]

const DISOLAYT_TABLE_COLUMN = [

]

function getTableName() {
    return BASE_TABLE_NAME
}

class JavascriptModel {
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
            'errorMessage',
            'errorStack',
            'browserInfo',
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
                Logger.log(err.message, 'javascript_error_info    add   出错')
                return []
            })
        let id = _.get(insertResult, [0], 0)

        return id > 0

    }
}



export default JavascriptModel



