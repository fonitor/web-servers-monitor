import Knex from '../library/mysql'
import _ from 'lodash'
import Logger from '../library/logger'
import * as config from '../config/err'

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

    /**
     * api 请求明细
     * @param {*} params 
     */
    async getApiCountLists(params) {
        let { startTime, endTime, app, pageSize, page } = params
        let tableName = getTableName()
        let res = await Knex.select('simpleUrl', 'httpUrl')
            .from(tableName)
            .sum('loadTime as loadSumTime', 'http')
            .count('httpUrl as httpUrlCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .groupBy('httpUrl', 'simpleUrl')
            .limit(pageSize)
            .offset((page * pageSize) - pageSize)
            .catch(err => {
                console.log(err)
                return []
            })

        return res
    }

    /**
     * api 请求总数
     * @param {*} params 
     */
    async getApiCount(params) {
        let { startTime, endTime, app } = params
        let tableName = getTableName()
        let res = await Knex.select('simpleUrl', 'httpUrl')
            .from(tableName)
            .count('httpUrl as httpUrlCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .groupBy('httpUrl', 'simpleUrl')
            .catch(err => {
                console.log(err)
                return []
            })

        return res.length
    }

    /**
     * 获取错误信息
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} httpUrls 
     */
    async getApiStatusError(startTime, endTime, httpUrls) {
        let tableName = getTableName()
        let res = await Knex.select('httpUrl', 'httpStatus')
            .from(tableName)
            .count('httpUrl as httpUrlCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .whereIn('httpUrl', httpUrls)
            .groupBy('httpUrl', 'httpStatus')
            .catch(err => {
                console.log(err)
                return []
            })

        return res
    }

    /**
     * 请求耗时
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} httpUrls 
     * @param {*} httpStatus
     */
    async getApiTime(startTime, endTime, httpUrls, httpStatus) {
        let tableName = getTableName()
        let res = await Knex.select('httpUrl')
            .from(tableName)
            .sum('loadTime as loadSumTime')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('httpStatus', '=', httpStatus)
            .whereIn('httpUrl', httpUrls)
            .groupBy('httpUrl')
            .catch(err => {
                console.log(err)
                return []
            })

        return res
    }

    /**
     * errorList
     * @param {*} params 
     */
    async getErrorCountList(params) {
        let { startTime, endTime, app, pageSize, page } = params
        let tableName = getTableName()
        let res = await Knex.select('simpleUrl', 'httpUrl')
            .from(tableName)
            .count('httpUrl as httpUrlCount')
            .count('userId as userIdCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .andWhere('httpUploadType', '=', config.HTTP_TYPE_ERROR)
            .groupBy('httpUrl', 'simpleUrl')
            .limit(pageSize)
            .offset((page * pageSize) - pageSize)
            .catch(err => {
                console.log(err)
                return []
            })

        return res
    }

    /**
     * 错误总数
     * @param {*} params 
     */
    async getErrorCount(params) {
        let { startTime, endTime, app } = params
        let tableName = getTableName()
        let res = await Knex.select('simpleUrl', 'httpUrl')
            .from(tableName)
            .count('httpUrl as httpUrlCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .andWhere('httpUploadType', '=', config.HTTP_TYPE_ERROR)
            .groupBy('httpUrl', 'simpleUrl')
            .catch(err => {
                console.log(err)
                return []
            })

        return res.length
    }

    /**
     * 请求错误
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} httpUrls 
     * @param {*} httpStatus
     */
    async getApiErrorStatus(startTime, endTime, httpUrls) {
        let tableName = getTableName()
        let res = await Knex.select('httpUrl')
            .from(tableName)
            .sum('loadTime as loadSumTime')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('httpUploadType', '=', config.HTTP_TYPE_ERROR)
            .whereIn('httpUrl', httpUrls)
            .groupBy('httpUrl')
            .catch(err => {
                console.log(err)
                return []
            })

        return res
    }
}