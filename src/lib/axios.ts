import axios, { type AxiosRequestConfig } from 'axios'
import toast from 'react-hot-toast'

import i18n from '@/lib/i18n.ts'

const Axios = axios.create()

Axios.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    toast.error(i18n.t('genericNetworkError'), {
      id: 'axios-response-interceptor',
    })
    return await Promise.reject(error)
  },
)

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class HttpClient {
  static async get<T>(url: string, config?: AxiosRequestConfig<T>) {
    const response = await Axios.get<T>(url, config)
    return response.data
  }

  static async post<T>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig<T>,
  ) {
    const response = await Axios.post<T>(url, data, config)
    return response.data
  }

  static async put<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig<T>,
  ) {
    const response = await Axios.put<T>(url, data, config)
    return response.data
  }

  static async patch<T>(
    url: string,
    data: unknown,
    config?: AxiosRequestConfig<T>,
  ) {
    const response = await Axios.patch<T>(url, data, config)
    return response.data
  }

  static async delete<T>(url: string, config?: AxiosRequestConfig<T>) {
    const response = await Axios.delete<T>(url, config)
    return response.data
  }
}
