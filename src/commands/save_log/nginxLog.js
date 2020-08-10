import fs from 'fs'
import { readLine } from 'lei-stream'
import moment from 'moment'
import _ from 'lodash'
import commonConfig from '../../config/common'
import SaveLogBase from './base'


export default class NginxParseLog extends SaveLogBase {
    static get signature() {
        return `
         SaveLog:Nginx 
         `
    }

    static get description() {
        return '每一分钟读取Nginx日志文件，并解析'
    }

    /**
     * 执行
     * @param {*} args 
     * @param {*} options 
     */
    async execute(args, options) {
        let self = this
        let logCounter = 0
        let legalLogCounter = 0
        let nginxLogFilePath = commonConfig.nginxLogFilePath
        let timeAt = moment().unix() - 60
        let timeMoment = moment.unix(timeAt)
        let formatStr = timeMoment.format('/YYYY/MM/DD/HH/mm')
        let logAbsolutePath = `${nginxLogFilePath}${formatStr}.log`
            logAbsolutePath = `${nginxLogFilePath}/jk.access.log`
        if (fs.existsSync(logAbsolutePath) === false) {
            this.log(`log文件不存在, 自动跳过 => ${logAbsolutePath}`)
            return
        }
        let onDataIn = async (data, next) => {
            console.log('---------')
            console.log(data)
            console.log('---------')
        }
        readLine(fs.createReadStream(logAbsolutePath), {
            // 换行符，默认\n
            newline: '\n',
            // 是否自动读取下一行，默认false
            autoNext: true,
            // 编码器，可以为函数或字符串（内置编码器：json，base64），默认null
            encoding: null
        }).go(onDataIn, () => {})
    }

}