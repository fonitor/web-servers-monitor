import Base from '../base'
import RabbitMq from '../../library/mq/index'
import Utils from '../../common/utils'

const mq = new RabbitMq()
// const MAX_RUN_TIME = 29 * 1000 // 29s后自动关闭

class SaveLog extends Base {
    static get signature() {
        return `
            SaveLog:Mq
        `
    }

    static get description() {
        return '解析mq日志, 按日志创建时间将原日志和解析后合法的json日志落在log文件中, 每运行30s自动退出'
    }

    /**
     * 收集log
     * @param {*} args 
     * @param {*} options 
     */
    async execute (args, options) {
        mq.receiveQueueMsg('webLogSave', (res) => {
            let useData = JSON.parse(res)
            if (!!useData.monitorIp) {
                let ipResult = Utils.getInstance().getIp(useData.monitorIp) || {}
                useData.country = ipResult.country || ""
                useData.province =ipResult.province || ""
                useData.city = ipResult.city
            }
            console.log(useData)
        }, (error) => {

        })
    }
}

export default SaveLog