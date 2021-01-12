import Base from "../base";

class JsError extends Base {
    static get signature () {
        return `
         Js:Error
         {startTime:日志扫描范围上限格式}
         {endTime:日志扫描范围下限格式}
         `
      }
    
      static get description () {
        return '[按每隔5分钟] 解析mysql日志, 分析记录指定时间范围内的js 错误'
      }

      /**
       * 脚本执行
       * @param {*} args 
       * @param {*} options 
       */
      async execute (args, options) {
        console.log(args)
        let { startTime, endTime } = args
        if (!startTime || !endTime) {
            this.warn('参数不正确, 自动退出')
            return
        }

        this.log(`调用到js error => ${startTime}`)
        console.log('调用到js error')
        console.log(startTime)
        console.log(endTime)
      }
      
}

export default JsError