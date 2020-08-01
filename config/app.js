/**
 * === app config ===
 * 项目应用的配置
 * 
 */

import env from './env'
import path from 'path'

const production = {
    name: '小林监控平台开发环境',
    port: 3000,
    proxy: false,
    absoluteLogPath: path.resolve(__dirname, '../', 'log')
}

// 下面的特定环境可以深度合并到上面的默认环境
// 线上环境是上面的默认环境，不要乱改哦

// 开发环境配置
const development = {
    name: '小林监控平台开发环境',
    port: 3000,
    proxy: false,
    absoluteLogPath: path.resolve(__dirname, '../', 'log')
}
// 测试环境配置
const testing = {
    name: '小林监控平台开发环境',
    port: 3000,
    proxy: false,
    absoluteLogPath: path.resolve(__dirname, '../', 'log')
}

let config = {
    development,
    testing,
    production
}

export default config[env]