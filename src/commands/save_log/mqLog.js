import Base from '../base'
import RabbitMq from '../../library/mq/index'

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
        console.log('测试')
        mq.receiveQueueMsg('webLogSave', (res) => {
            console.log(res)
        }, (error) => {

        })
    }
}

export default SaveLog