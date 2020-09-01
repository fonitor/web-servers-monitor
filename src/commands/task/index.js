import Base from '../base'

// https://www.npmjs.com/package/node-schedule
class TaskManager extends Base {
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
    }

    closeOtherTaskManager() {
        
    }
}