

import Base from "../base";
import HttpModel from '../../model/http_model'
import Project from '../../model/project_model'
import HttpCountModel from '../../model/http_count_model'
import moment from 'moment'
import DATE_FORMAT from '../../constants/date_format'

const httpModel = new HttpModel()
const projectModel = new Project()
const httpCountModel = new HttpCountModel()

class HttpLog extends Base {
  static get signature() {
    return `
        Http:Log
        {startTime:日志扫描范围上限格式}
        {endTime:日志扫描范围下限格式}
        `
  }

  static get description() {
    return '[按每隔1分钟] 解析mysql日志, 分析记录指定时间范围内的js 错误'
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
    let httpLists = await httpModel.getTypeCount(startTime, endTime);
    console.log(projectLists)
    console.log(httpLists)
    // this.handleSaveJs(project.app, jsErrors, endTime)
    // for (let project of projectLists) {
    //   try {
         
    //   }catch(err) {
    //     this.handleSaveJs(project.app, 0, endTime)
    //   }
    // }

    for (let project of projectLists) {
        let isSaveHttpError = false,
            isSaveHttpTime = false,
            param = {
                app: project.app,
                time: endTime,
                status: 0
            }
        for (let http of httpLists) {
            param.count = http.count
            param.status = http.httpStatus
            // 成功数
            if (http.app == project.app && http.httpUploadType == 1) {
                param.type = 1
                this.handleSaveHttp(param)
                isSaveHttpError = true
            }
            // 错误数
            if (http.app == project.app && http.httpUploadType == 2) {
                param.type = 2
                this.handleSaveHttp(param)
                isSaveHttpTime = true
            }
        }
        if (!isSaveHttpError) {
            param.count = 0
            param.status = 0
            param.type = 1
            this.handleSaveHttp(param)
        }
        if (!isSaveHttpTime) {
            param.count = 0
            param.status = 0
            param.type = 2
            this.handleSaveHttp(param)
        }

        isSaveHttpError = false
        isSaveHttpTime = false
    }
  }

  /**
   * 保存统计好的错误信息
   * @param {*} params 
   */
  async handleSaveHttp(params) {
    let { app, type, count, status , time } = params
    let item = {}
    item.app = app
    item.type = type
    item.count = count
    item.status = status
    item.dataTime = moment().format(DATE_FORMAT.DISPLAY_BY_DAY)
    item.createdAt = time
    item.updatedAt = time
    httpCountModel.addHttpCount(item)
  }

}

export default HttpLog