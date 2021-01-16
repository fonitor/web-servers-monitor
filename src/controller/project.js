import Base from './base'
import moment from 'moment'
import _ from 'lodash'
import * as config from '../config/err'
import ProjectModel from '../model/project_model'
import DATE_FORMAT from '../constants/date_format'

const projectModel = new ProjectModel()

/**
 * 项目
 */
export default class ProjectController extends Base {
    /**
     * 项目列表
     * @param {*} req 
     * @param {*} res 
     */
    async getPages(req, res) {
        let data = req.body || {},
            result = {}
        result.lists = await projectModel.getListsPage(data)
        result.count = await projectModel.getProjectCount()
        return this.send(res, result)
    }
}
