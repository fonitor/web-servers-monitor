import _ from 'lodash'
import ProjectController from '../../../controller/project'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const projectController = new ProjectController()

// 项目列表
const projectList = RouterConfigBuilder.routerConfigBuilder('/api/project/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return projectController.getPages(req, res)
})

export default {
    ...projectList,
}
