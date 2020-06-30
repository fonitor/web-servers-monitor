import fetch from './fetch'

// 获取验证码
export function getConfig (data) {
  return fetch({
    url: '/applet/text/charge',
    method: 'get',
    params: data
  })
}