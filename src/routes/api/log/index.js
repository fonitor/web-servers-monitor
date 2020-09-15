import _ from 'lodash'
import moment from 'moment'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const saveLog = RouterConfigBuilder.routerConfigBuilder('/api/save/log', RouterConfigBuilder.METHOD_TYPE_POST, (req, res) => {

}, false, false)

export default {
    ...saveLog
}