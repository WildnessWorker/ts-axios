import { isPlainObject } from './util'

/**
 * @description: ajax传输数据只支持 XMLHttpRequestResponseType 其中的类型
 * @description: 其中不包括普通对象，如果发送的数据为对象，则将其转换为json字符串
 * @param {any} data 发送给服务端的数据 
 * @return: 返回经过处理的data
 */
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

/**
 * @description: 处理服务端返回的数据，有时服务端返回的可能一个json字符串
 * @description: 在这里我们尝试将其转换为json数据
 * @param {any}: data 服务端返回的数据 
 * @return: 如果是json字符串则返回json数据，不是json字符串，原样返回
 */
export function transformResponse(data: any): any {
  if(typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch {
      // do nothing
    }
  }
  return data
}
