

import Base from "../base";
import JsCountModel from '../../model/js_count_model'
import JavascriptModel from '../../model/javascript_model'
import moment from 'moment-timezone'
moment.tz.setDefault('Asia/Shanghai')

const javascriptModel = new JavascriptModel()
const jsModel = new JsCountModel()

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
        console.log(moment().format('YYYY-MM-DD hh:mm:ss'))
        let { startTime, endTime } = args
        if (!startTime || !endTime) {
            this.warn('参数不正确, 自动退出')
            return
        }
        let jsErrors = await javascriptModel.getGroupAppCount(startTime, endTime);
        console.log(jsErrors)
      }

      handleSaveJs() {

      }
      
}

export default JsError