import { isPlainObject } from './util'

/**
 * @description 请求发送之前body数据如果是对象，将其转换为json字符串
 * @param data
 */
export function transformRequest(data: any): any {
  if (isPlainObject(data)) {
    return JSON.stringify(data)
  }
  return data
}

/**
 * @description 如果data类型为字符串，则尝试转换为json对象
 * @param data
 */
export function transformResponse(data: any): any {
  if (typeof data === 'string') {
    try {
      data = JSON.parse(data)
    } catch (e) {
      // do nothing...
    }
  }
  return data
}
