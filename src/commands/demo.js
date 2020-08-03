import Base from './base'

class CommandDemo extends Base {
    static get signature() {
        return `
         Command:Demo 
         
         {--onlyFlag:[必传]flag,只有true/false两个值} 
         {--logName=@value:[必传]日志文件名} 
         {--isTest?=@value:[可选]是否处于测试环境}
         `
    }

    static get description() {
        return '解析kafka日志, 分析pv'
    }

    async execute(args, options) {
        let { onlyFlag, logName, isTest } = options
        this.log(`CommandDemo, onlyFlag=> ${onlyFlag}`)
        this.log(`CommandDemo, logName=> ${logName}`)
        this.log(`CommandDemo, isTest=> ${isTest}`)
        // let i = 0
        // while (1) {
        //   i++
        //   await sleep(1)
        //   this.log(`第${i}条日志`)
        // }
    }

}

export default CommandDemo