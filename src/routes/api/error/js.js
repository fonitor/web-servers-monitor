import _ from 'lodash'
import jsError from '../../../controller/jsError'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const jsController = new jsError()


console.log(RouterConfigBuilder.METHOD_TYPE_GET)

const jsCount = RouterConfigBuilder.routerConfigBuilder('/api/js/count', RouterConfigBuilder.METHOD_TYPE_GET, (req, res) => {
    console.log('测试')
    return jsController.jsCount(req, res)
})

export default {
    ...jsCount
}