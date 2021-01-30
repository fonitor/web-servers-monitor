import Knex from '../library/mysql'
import _ from 'lodash'
import Logger from '../library/logger'

const BASE_TABLE_NAME = 'customer_pv'
const TABLE_COLUMN = [

]

const DISOLAYT_TABLE_COLUMN = [

]

function getTableName() {
    return BASE_TABLE_NAME
}

export default class CustomerPv {
    constructor() {

    }

    /**
     * 保存pv 信息
     * @param {*} data 
     */
    async addPvSave(data) {
        let tableName = getTableName()
        let insertData = {}
        for (let column of [
            'app',
            'type',
            'simpleUrl',
            'referrer',
            'projectVersion',
            'customerKey',
            'userId',
            'deviceName',
            'os',
            'browserName',
            'browserVersion',
            'browserInfo',
            'monitorIp',
            'country',
            'province',
            'city',
            'dataDay',
            'createdAt',
            'updatedAt'
        ]) {
            insertData[column] = data[column] || ""
            // if (_.has(data, [column])) {
            //     insertData[column] = data[column] || ""
            // }
        }

        let insertResult = await Knex.returning('id')
            .insert(insertData)
            .into(tableName)
            .catch(err => {
                console.log(err)
                Logger.log(err.message, 'customer_pv    add   出错')
                return []
            })
        let id = _.get(insertResult, [0], 0)

        return id > 0
    }

    /**
     * 某一时间段pv量
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} app 
     */
    async getTimePagePvCount(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .count('id as idCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .catch(err => {
                console.log(err)
                return []
            })

        return res;
    }

    /**
     * 某一时间段uv量
     * @param {*} startTime 
     * @param {*} endTime 
     * @param {*} app 
     */
    async getTimePageUv(startTime, endTime, app) {
        let tableName = getTableName()
        let res = await Knex(tableName)
            .countDistinct('userId as idCount')
            .where('createdAt', '>', startTime)
            .andWhere('createdAt', '<', endTime)
            .andWhere('app', app)
            .andWhere('userId', '!=', '')
            .catch(err => {
                console.log(err)
                return []
            })

        return res;
    }
}