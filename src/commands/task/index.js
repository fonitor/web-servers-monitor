import Base from '../base'
import Util from '../../common/utils'
import moment from 'moment'
import shell from 'shelljs'

// https://www.npmjs.com/package/node-schedule
export default class TaskManager extends Base {

    static get signature() {
        return `
         Task:Manager
         `
    }

    static get description() {
        return '任务调度主进程, 只能启动一次'
    }

    async handle() {
        this.log('任务主进程启动')
        // 启动先关闭其他TaskManager进程
        await this.closeOtherTaskManager()

        this.log('开始休眠')
        for (let i = 0; i < 30; i++) {
            await Util.getInstance().sleep(1 * 1000)
            this.log(`休眠中, 第${i + 1}秒`)
        }
        this.log('休眠完毕')
        this.log('开始注册cron任务')
        // 注册定时任务
        this.log('注册每分钟执行一次的任务')
        this.registerTaskRepeatPer1Minute()
        this.log('注册每10分钟执行一次的任务')
        this.registerTaskRepeatPer10Minute()
        this.log('注册每1小时执行一次的任务')
        this.registerTaskRepeatPer1Hour()
        this.log('注册每6小时执行一次的任务')
        this.registerTaskRepeatPer6Hour()
        this.log('全部定时任务注册完毕, 等待执行')
    }

    /**
     * 每分钟启动一次
     */
    async registerTaskRepeatPer1Minute() {

    }

    /**
     * 注册每10分钟执行一次的任务
     */
    async registerTaskRepeatPer10Minute() {

    }

    /**
     * 注册每1小时执行一次的任务
     */
    async registerTaskRepeatPer1Hour() {

    }

    /**
     * 注册每6小时执行一次的任务
     */
    async registerTaskRepeatPer6Hour() {

    }

    /**
     * 启动先关闭其他TaskManager进程
     */
    closeOtherTaskManager() {

    }

    /**
     * 执行命令
     * @param {*} commandName 
     * @param {*} args 
     */
    async execCommand(commandName, args) {
        let argvString = args.map((arg) => { return `'${arg}'` }).join('   ')
        let command = `NODE_ENV=${env} node ${projectBaseUri}/dist/fee.js ${commandName}  ${argvString}`
        this.log(`待执行命令=> ${command}`)
        let commandStartAtFormated = moment().format(DATE_FORMAT.DISPLAY_BY_MILLSECOND)
        let commandStartAtms = moment().valueOf()
        shell.exec(command, {
            async: true,
            silent: true
        }, () => {
            let commandFinishAtFormated = moment().format(DATE_FORMAT.DISPLAY_BY_MILLSECOND)
            let commandFinishAtms = moment().valueOf()
            let during = (commandFinishAtms - commandStartAtms) / 1000
            this.log(`${command}命令执行完毕, 共用时${during}秒, 开始执行时间=> ${commandStartAtFormated}, 执行完毕时间=> ${commandFinishAtFormated}`)
        })
    }
}