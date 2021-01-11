import _ from 'lodash'
import jsError from '../../../controller/jsError'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'
import moment from 'moment'

const jsController = new jsError()

const jsCount = RouterConfigBuilder.routerConfigBuilder('/api/js/count', RouterConfigBuilder.METHOD_TYPE_GET, (req, res) => {
    return jsController.jsCount(req, res)
})

export default {
    ...jsCount
}