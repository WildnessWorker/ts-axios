import { AxiosRequestConfig, AxiosResponse } from '../types'

/**
 * @description 实现AxiosError类对错误信息进行增强方便用户调试
 */
export class AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?: string | null
  request?: any
  response?: AxiosResponse

  constructor(
    message: string,
    config: AxiosRequestConfig,
    code?: string | null,
    request?: any,
    response?: AxiosResponse
  ) {
    super(message)
    this.config = config
    this.code = code
    this.request = request
    this.response = response
    this.isAxiosError = true

    Object.setPrototypeOf(this, AxiosError.prototype)
  }
}

/**
 *
 * @description 通过此工厂函数创建AxiosError实例
 * @param message 错误信息
 * @param config 请求相配置
 * @param code 状态code值
 * @param request XMLhttpRequest实例
 * @param response 服务端返回的数据
 */
export function createError(
  message: string,
  config: AxiosRequestConfig,
  code?: string | null,
  request?: any,
  response?: AxiosResponse
): AxiosError {
  const error = new AxiosError(message, config, code, request, response)
  return error
}
