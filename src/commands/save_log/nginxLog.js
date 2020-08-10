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

    async execute (args, options) {
        console.log('测试')
    }

}