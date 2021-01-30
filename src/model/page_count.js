import Knex from '../library/mysql'
import _ from 'lodash'
import Logger from '../library/logger'
import * as config from '../config/err'

const BASE_TABLE_NAME = 'page_count'
const TABLE_COLUMN = [

]

const DISOLAYT_TABLE_COLUMN = [

]

function getTableName() {
    return BASE_TABLE_NAME
}

export default class PageCount {
    constructor() {

    }

    /**
     * 保存pv 信息
     * @param {*} data 
     */
    async save(data) {
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

        let insertResult = await Knex.returning('id')
            .insert(insertData)
            .into(tableName)
            .catch(err => {
                console.log(err)
                Logger.log(err.message, 'page_count    add   出错')
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
            pvCount: 0,
            uvCount: 0
        }
        for (let item of res) {
            if (item.type == config.PAGE_COUNT_PV) {
                result.pvCount = item.typeCount
            }
            if (item.type == config.PAGE_COUNT_UV) {
                result.uvCount = item.typeCount
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
            .groupBy('createdAt', 'type', 'count')
            .catch((e) => {
                Logger.warn('查询失败, 错误原因 =>', e)
                return []
            })

        return res
    }
}