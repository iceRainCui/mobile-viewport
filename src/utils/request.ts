import axios, { type AxiosRequestConfig, AxiosResponse } from 'axios';
import { showToast } from 'vant';

export interface RetDataType<T> {
  errno: number;
  errmsg: string;
  data: T;
}

const axiosInstance = axios.create({
  baseURL: '/api',
});
axios.defaults.withCredentials = true;

// response 拦截器
axiosInstance.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (response.status !== 200) {
      showToast('网络请求异常');
      throw new Error(`${response.status}`);
    }

    if (response.data.errno) {
      showToast(response.data.errmsg as string);
      throw response.data.errno;
    }
    return response.data as object;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export function request<T>(
  options: AxiosRequestConfig
): Promise<RetDataType<T>> {
  return axiosInstance.request(options);
}
