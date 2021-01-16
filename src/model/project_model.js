import Knex from '../library/mysql'
import moment from 'moment'
import DATE_FORMAT from '../constants/date_format'
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

    async getProjectCount() {
        let tableName = getTableName()
        let res = await Knex.from(tableName).count('id as count');
        return res[0].count
    }

    /**
     * 分页项目列表
     * @param {*} params 
     */
    async getListsPage(params) {
        let { pageSize, page } = params
        let tableName = getTableName()
        let res = await Knex.select('*')
            .from(tableName)
            .limit(pageSize)
            .offset((page * pageSize) - pageSize)
            .catch(err => {
                console.log(err)
                return []
            })

        let lists = []
        for (let item of res) {
            item.createdAt = moment(item.createdAt).format(DATE_FORMAT.DISPLAY_BY_SECOND)
            item.updatedAt = moment(item.updatedAt).format(DATE_FORMAT.DISPLAY_BY_SECOND)
            lists.push(item)
        }

        return lists
    }

}



export default Project



