import API_RES from '../../constants/api_res'
import Logger from '../logger'

const METHOD_TYPE_GET = 'get'
const METHOD_TYPE_POST = 'post'

/**
 *
 * @param {String} url          接口url
 * @param {String} methodType   接口类型, METHOD_TYPE_GET / METHOD_TYPE_POST
 * @param {Function} func       实际controller函数
 * @param {Boolean} needProjectPriv 是否需要项目权限
 * @param {Boolean} needLogin   是否需要登录
 * @param {Object}
 */
function routerConfigBuilder(url = '/', methodType = METHOD_TYPE_GET, func, needProjectPriv = true, needLogin = true) {
    let routerConfig = {}
    routerConfig[url] = {
        methodType,
        func,
        needLogin,
        needProjectPriv
    }
    return routerConfig
}

export default {
    routerConfigBuilder,

    // 方法常量
    METHOD_TYPE_GET,
    METHOD_TYPE_POST
}
