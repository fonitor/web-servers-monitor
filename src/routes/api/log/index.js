import _ from 'lodash'
import moment from 'moment'
import Index from '../../../controller/index'
import RouterConfigBuilder from '../../../library/utils/router_config_builder'

const indexController = new Index()

const saveLog = RouterConfigBuilder.routerConfigBuilder('/api/save/log', RouterConfigBuilder.METHOD_TYPE_GET, (req, res) => {
    return indexController.saveLog(req, res)
})

export default {
    ...saveLog
}