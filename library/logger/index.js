import path from 'path'
import log4js from 'log4js'
import moment from 'moment'
import _ from 'lodash'
import config from '../../config/app'
import DATE_FORMAT from '../../constants/date_format'


let baseLoggerConfig = {
    appenders: {
        // command: {
        //   type: 'dateFile',
        //   filename: `${config.absoluteLogPath}/command/${commandName}`,
        //   pattern: '-yyyy-MM-dd.log',
        //   alwaysIncludePattern: true
        // },
        express: {
            type: 'dateFile',
            filename: `${config.absoluteLogPath}/express/runtime`,
            pattern: '-yyyy-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: { appenders: ['express'], level: 'info' },
        // command: { appenders: ['command'], level: 'info' },
        express: { appenders: ['express'], level: 'info' }
    }
}

/**
 * getLogger会重新打开一个文件, 导致文件句柄打开过多, 系统报错退出, 因此需要人工做一层缓存
 */
let loggerCacheMap = new Map()
function getLogger(loggerType = 'express', loggerConfig = baseLoggerConfig) {
    let loggerConfigJSON = JSON.stringify({ loggerType, loggerConfig })
    if (loggerCacheMap.has(loggerConfigJSON)) {
        return loggerCacheMap.get(loggerConfigJSON)
    } else {
        log4js.configure(loggerConfig)
        let logger = log4js.getLogger(loggerType)
        loggerCacheMap.set(loggerConfigJSON, logger)
        return logger
    }
}

