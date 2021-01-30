import _ from 'lodash'
import PageController from '../../../controller/page'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const page = new PageController()

// 每隔5分钟图表
const pageTrend = RouterConfigBuilder.routerConfigBuilder('/api/page/trend', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {
    return page.getTrend(req, res)
})

export default {
    ...pageTrend,
}