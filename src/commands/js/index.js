

import Base from "../base";
import JsCountModel from '../../model/js_count_model'
import JavascriptModel from '../../model/javascript_model'
import moment from 'moment'
import DATE_FORMAT from '../../constants/date_format'

const javascriptModel = new JavascriptModel()
const jsModel = new JsCountModel()

class JsError extends Base {
  static get signature() {
    return `
         Js:Error
         {startTime:日志扫描范围上限格式}
         {endTime:日志扫描范围下限格式}
         `
  }

  static get description() {
    return '[按每隔5分钟] 解析mysql日志, 分析记录指定时间范围内的js 错误'
  }

  /**
   * 脚本执行
   * @param {*} args 
   * @param {*} options 
   */
  async execute(args, options) {
    let { startTime, endTime } = args
    if (!startTime || !endTime) {
      this.warn('参数不正确, 自动退出')
      return
    }
    let jsErrors = await javascriptModel.getGroupAppCount(startTime, endTime);
    if (!jsErrors || jsErrors.length <= 0) {
      return
    }
    for (let error of jsErrors) {
      this.handleSaveJs(error)
    }
  }

  /**
   * 保存统计好的错误信息
   * @param {*} error 
   */
  async handleSaveJs(error) {
    let item = {}
    item.app = error.app
    item.type = 1
    item.count = error.errorCount
    item.dataTime = moment().format(DATE_FORMAT.DISPLAY_BY_DAY)
    item.createdAt = moment().format(DATE_FORMAT.DISPLAY_BY_MILLSECOND)
    item.updatedAt = moment().format(DATE_FORMAT.DISPLAY_BY_MILLSECOND)
    jsModel.addJavascriptError(item)
  }

}

export default JsError