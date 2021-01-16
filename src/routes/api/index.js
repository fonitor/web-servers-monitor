import saveLog from './log'
import js from './error/js'
import http from './http/index'

export default {
    ...saveLog,
    ...js,
    ...http
}