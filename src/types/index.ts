export type Method =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'

/**
 * @description: 调用请求方法时对所传参数定义的参数规范 
 * @interface: AxiosRequestConfig
 */
export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
}

/**
 * @description: 处理服务端返回数据，规定的数据类型与结构规范 
 * @interface: AxiosResponse
 */
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

/**
 * @description: 继承了 AxiosResponse，这里目前的作用是供外部调用
 * @interface: AxiosPromise
 */
export interface AxiosPromise extends Promise<AxiosResponse> {

}
