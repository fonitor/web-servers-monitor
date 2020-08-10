import Base from './base'

// npm run fee Command:Demo user ceshi --onlyFlag false
class CommandDemo extends Base {
    static get signature() {
        return `
            Command:Demo 
         `
    }

    static get description() {
        return '测试demo'
    }

    async execute(args, options) {
        console.log('测试')
        // console.log(args)
        // console.log(options)
        // let { onlyFlag, logName, isTest } = options
        // this.log(`CommandDemo, onlyFlag=> ${onlyFlag}`)
        // this.log(`CommandDemo, logName=> ${logName}`)
        // this.log(`CommandDemo, isTest=> ${isTest}`)
        // let i = 0
        // while (1) {
        //   i++
        //   await sleep(1)
        //   this.log(`第${i}条日志`)
        // }
    }

}

export default CommandDemo