import { isPlainObject } from './util'

/**
 * @description: 用来规范headers头部信息，检查用户传入的header是否规范，不规范则矫正
 * @param {any} headers 需要处理的headers头部信息
 * @param {string} normalizedName 一个正确规范的header属性名 
 */
function normalizeHeaderName(headers: any, normalizedName: string): void {
  if (!headers) {
    return
  }
  Object.keys(headers).forEach(name => {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = headers[name]
      delete headers[name]
    }
  })
}

// data参数的作用是判断发送到服务端的数据是不是一个对象json数据，是一个json数据时才做处理
export function processHeaders(headers: any, data: any): any {
  normalizeHeaderName(headers, 'Content-Type')

  if (isPlainObject(data)) {
    if (headers && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json;chartset=UTF-8'
    }
  }

  return headers
}

// 由于返回的headers是一串字符串，通过此方法处理成对象结构
export function parseHeaders(headers: string): any {
  let parsed = Object.create(null)
  if(!headers) {
    return parsed
  }
  headers.split('\r\n').forEach((line) => {
    let [key, val] = line.split(':')
    key = key.trim().toLowerCase()
    if(!key) {
      return
    }
    if(val) {
      val = val.trim()
    }
    parsed[key] = val
  })
  return parsed
}
