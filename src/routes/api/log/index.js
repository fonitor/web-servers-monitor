import _ from 'lodash'
import moment from 'moment'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const saveLog = RouterConfigBuilder.routerConfigBuilder('/api/save/log', RouterConfigBuilder.METHOD_TYPE_GET, (req, res) => {
    res.send({ title: '测试返回' })
}, false, false)

export default {
    ...saveLog
}