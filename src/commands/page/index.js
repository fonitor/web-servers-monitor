

import Base from "../base";
import moment from 'moment'
import DATE_FORMAT from '../../constants/date_format'
import PageCount from '../../model/page_count'

const pageCount = new PageCount()


class Page extends Base {
  static get signature() {
    return `
         Page:Count
         {startTime:日志扫描范围上限格式}
         {endTime:日志扫描范围下限格式}
         `
  }

  static get description() {
    return '[按每隔5分钟] 解析mysql日志, 分析记录指定时间范围内的页面总数'
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
    let projectLists = await projectModel.getLists()
    if (!projectLists || projectLists.length <= 0) {
      return
    }

    for (let project of projectLists) {
      try {
         let jsErrors = await javascriptModel.getJsCount(startTime, endTime, project.app);
         this.handleSaveJs(project.app, jsErrors, endTime)
      }catch(err) {
        this.handleSaveJs(project.app, 0, endTime)
      }
    }
  }

  /**
   * 保存统计好的页面信息
   * @param {*} app 
   * @param {*} count 
   * @param {*} time 
   */
  async handleSaveJs(app, count, time) {
    // let item = {}
    // item.app = app
    // item.type = 1
    // item.count = count
    // item.dataTime = moment().format(DATE_FORMAT.DISPLAY_BY_DAY)
    // item.createdAt = time
    // item.updatedAt = time
    // jsModel.addJavascriptError(item)
  }

}

export default Page