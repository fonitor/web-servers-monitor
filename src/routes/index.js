var express = require('express')
var router = express.Router()
import RouterConfigBuilder from '../library/utils/router_config_builder'
import Api from './api'

// 路由分为以下部分
// 不需要登录
const withoutLoginRouter = express.Router()

let routerConfigMap = {
  ...Api
}

/**
 * 根据请求方法注册路由
 * @param {*} customerRouter
 * @param {*} routerConfig
 * @param {*} url
 */
function registerRouterByMethod(customerRouter, routerConfig, url) {
  switch (routerConfig.methodType) {
    case RouterConfigBuilder.METHOD_TYPE_GET:
      customerRouter.get(url, (req, res) => {
        return routerConfig.func(req, res)
      })
      break
    case RouterConfigBuilder.METHOD_TYPE_POST:
      customerRouter.post(url, (req, res) => {
        return routerConfig.func(req, res)
      })
      break
    default:
  }
}

// 自动注册
for (let url of Object.keys(routerConfigMap)) {
  let routerConfig = routerConfigMap[url]
  // 不需要登录
  registerRouterByMethod(withoutLoginRouter, routerConfig, url)
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send({ title: '测试返回' })
})

export default router