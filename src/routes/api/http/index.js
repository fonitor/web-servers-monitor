import _ from 'lodash'
import httpController from '../../../controller/http'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const http = new httpController()

// 每隔1分钟图表
const httpCount = RouterConfigBuilder.routerConfigBuilder('/api/http/count', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return http.httpCount(req, res)
})

const httpApiList = RouterConfigBuilder.routerConfigBuilder('/api/http/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return http.apiList(req, res)
})

// 错误列表
const httpApiErrorList = RouterConfigBuilder.routerConfigBuilder('/api/http/error/list', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return http.apiErrorList(req, res)
})

export default {
    ...httpCount,
    ...httpApiList,
    ...httpApiErrorList
}