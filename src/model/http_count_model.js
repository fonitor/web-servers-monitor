import Knex from '../library/mysql'
import _ from 'lodash'
import Logger from '../library/logger'

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
}