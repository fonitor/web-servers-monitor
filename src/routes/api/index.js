import saveLog from './log'
import js from './error/js'
import http from './http/index'
import project from './project/index'
import page from './page/index'

export default {
    ...saveLog,
    ...js,
    ...http,
    ...project,
    ...page
}