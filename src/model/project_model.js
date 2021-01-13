import Knex from '../library/mysql'
import moment from 'moment'
import _ from 'lodash'
import Logger from '../library/logger'

const BASE_TABLE_NAME = 'project'
const TABLE_COLUMN = [

]

const DISOLAYT_TABLE_COLUMN = [

]

function getTableName() {
    return BASE_TABLE_NAME
}

class Project {
    constructor() {
    }

    /**
     * 添加项目
     * @param {*} data 
     */
    async addJavascriptError(data) {
        let tableName = getTableName()
        let insertData = {}
        for (let column of [
            'projectType',
            'app',
            'userId',
            'status',
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
                Logger.log(err.message, 'project    add   出错')
                return []
            })
        let id = _.get(insertResult, [0], 0)

        return id > 0

    }

    /**
     * 获取项目列表
     */
    async getLists() {
        let tableName = getTableName()
        let res = await Knex
            .select('app')
            .from(tableName);
        return res
    }

}



export default Project



