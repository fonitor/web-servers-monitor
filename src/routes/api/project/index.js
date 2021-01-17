import _ from 'lodash'
import ProjectController from '../../../controller/project'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const projectController = new ProjectController()

// 项目列表
const projectList = RouterConfigBuilder.routerConfigBuilder('/api/project/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return projectController.getPages(req, res)
})

// 添加项目
const saveProject = RouterConfigBuilder.routerConfigBuilder('/api/project/save', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return projectController.saveProject(req, res)
})

export default {
    ...projectList,
    ...saveProject
}
