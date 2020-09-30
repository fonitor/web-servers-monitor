import Base from './base'

/**
 * 保存log
 */
export default class Index extends Base {
    /**
     * 保存log
     * @param {*} req 
     * @param {*} res 
     */
    saveLog(req, res) {
        console.log('测试')
        return this.send(res, {title: '测试返回'})
    }
}
