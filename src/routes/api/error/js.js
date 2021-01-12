import _ from 'lodash'
import jsError from '../../../controller/jsError'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const jsController = new jsError()

// 每隔5分钟图表
const jsCount = RouterConfigBuilder.routerConfigBuilder('/api/js/count', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return jsController.jsCount(req, res)
})

// js 错误分页
const jsLists = RouterConfigBuilder.routerConfigBuilder('/api/js/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return jsController.getJsList(req, res)
})

// js 错误分布
const jsSpreadCount = RouterConfigBuilder.routerConfigBuilder('/api/js/spread/count', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return jsController.getJsSpreadCount(req, res)
})


export default {
    ...jsCount,
    ...jsLists,
    ...jsSpreadCount
}