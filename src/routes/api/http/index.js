import _ from 'lodash'
import httpController from '../../../controller/http'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const http = new httpController()

// 每隔1分钟图表
const httpCount = RouterConfigBuilder.routerConfigBuilder('/api/http/count', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return http.httpCount(req, res)
})

export default {
    ...httpCount,
}