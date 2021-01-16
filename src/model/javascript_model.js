import Knex from '../library/mysql'
import moment from 'moment'
import _ from 'lodash'
import Logger from '../library/logger'
import DATE_FORMAT from '../constants/date_format'

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
            'app',
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
            'uploadType',
            'errorMessage',
            'errorStack',
            'browserInfo',
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
                Logger.log(err.message, 'javascript_error_info    add   出错')
                return []
            })
        let id = _.get(insertResult, [0], 0)

        return id > 0

    }

    /**
     * 统计一段时间js 报错影响用户数
     * @param {*} startTime 开始时间
     * @param {*} endTime 结束时间
     * @param {*} app
     */
    async getUserCount(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .countDistinct('userId as uv_count')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .catch(err => {
                console.log(err)
                return []
            })
        return res[0].uv_count
    }

    /**
     * 统计一段时间 js错误
     * @param {*} startTime 开始时间
     * @param {*} endTime 结束时间
     * @param {*} app
     */
    async getJsCount(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .count('* as errorCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .catch(err => {
                console.log(err)
                return []
            })
        return res[0].errorCount
    }

    /**
     * 城市报错总数
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} app 
     */
    async proviceCounts(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .count('* as errorCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .andWhere('province', '!=', '')
            .catch(err => {
                console.log(err)
                return []
            })
        return res[0].errorCount
    }

    /**
     * 统计一段时间 城市报错信息（做地图分布）
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} app
     */
    async getProvinceCount(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .select(['province'])
            .count('province as provinceCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('province', '!=', '')
            .andWhere('app', app)
            .groupBy(['province'])
            .catch(err => {
                console.log(err)
                return []
            })

        let lists = []
        for (let item of res) {
            let list = {}
            list.name = item.province
            list.value = item.provinceCount
            lists.push(list)
        }

        return lists;

    }

    /**
     * 统计一段时间 版本号报错信息（做版本号分布）
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} app
     */
    async getVersionCount(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .select(['browserVersion'])
            .count('province as browserVersionCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .groupBy(['browserVersion'])
            .catch(err => {
                console.log(err)
                return []
            })

        let lists = []
        for (let item of res) {
            let list = {}
            list.name = item.browserVersion
            list.value = item.browserVersionCount
            lists.push(list)
        }

        return lists;

    }

    /**
     * 统计一段时间 手机型号报错信息（做版本号分布）
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} app
     */
    async getDeviceCount(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .select(['deviceName'])
            .count('deviceName as deviceNameCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .groupBy(['deviceName'])
            .catch(err => {
                console.log(err)
                return []
            })

        let lists = []
        for (let item of res) {
            let list = {}
            list.name = item.deviceName
            list.value = item.deviceNameCount
            lists.push(list)
        }

        return lists;
    }

    /**
     * 统计一段时间 操作系统（做版本号分布）
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} app
     */
    async getOsCount(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .select(['os'])
            .count('os as osCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .groupBy(['os'])
            .catch(err => {
                console.log(err)
                return []
            })

        let lists = []
        for (let item of res) {
            let list = {}
            list.name = item.os
            list.value = item.osCount
            lists.push(list)
        }

        return lists;
    }

    /**
     * js 错误分页
     * @param {*} params 
     */
    async getJsPages(params) {
        let { startTime, endTime, app, pageSize, page } = params
        let tableName = getTableName()
        let res = await Knex.select('id', 'app', 'userId', 'deviceName', 'os', 'browserName', 'browserVersion', 'errorMessage', 'errorStack', 'browserInfo', 'createdAt')
            .from(tableName)
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
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

        return res
    }

    /**
     * 统计一段时间每个项目错误数量
     * @param {*} startTime 
     * @param {*} endTime 
     */
    async getGroupAppCount(startTime, endTime) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .select('app')
            .count('* as errorCount')
            .where('createdAt', '>=', startTime)
            .andWhere('createdAt', '<=', endTime)
            .groupBy(['app'])
            .catch(err => {
                console.log(err)
                return []
            })
        return res
    }
}



export default JavascriptModel



