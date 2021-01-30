

import Base from "../base";
import moment from 'moment'
import DATE_FORMAT from '../../constants/date_format'
import Project from '../../model/project_model'
import PageCount from '../../model/page_count'
import CustomerPv from '../../model/pv_model'
import * as config from '../../config/err'

const pageCount = new PageCount()
const customerPv = new CustomerPv()
const projectModel = new Project()

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
         let pagePvCount = await customerPv.getTimePagePvCount(startTime, endTime, project.app);
         this.handleSavePageCount(project.app, pagePvCount[0].idCount || 0, endTime, config.PAGE_COUNT_PV)
         let pageUvCount = await customerPv.getTimePageUv(startTime, endTime, project.app);
         this.handleSavePageCount(project.app, pageUvCount[0].idCount || 0, endTime, config.PAGE_COUNT_UV)
      }catch(err) {
        
      }
    }
  }

  /**
   * 保存统计好的页面信息
   * @param {*} app 
   * @param {*} count 
   * @param {*} time 
   * @param {*} type
   */
  async handleSavePageCount(app, count, time, type = config.PAGE_COUNT_PV) {
    let item = {}
    item.app = app
    item.type = type
    item.count = count
    item.dataTime = moment().format(DATE_FORMAT.DISPLAY_BY_DAY)
    item.createdAt = time
    item.updatedAt = time
    pageCount.save(item)
  }

}

export default Page