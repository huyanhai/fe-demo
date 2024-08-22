import { createAlova } from 'alova';
import VueHook from 'alova/vue';
import { axiosRequestAdapter } from '@alova/adapter-axios';

export default createAlova({
  baseURL: '/',
  timeout: 50000,
  statesHook: VueHook,
  requestAdapter: axiosRequestAdapter(),
  beforeRequest: (method) => {
    method.config.headers.token = 'token';
  },
  responded: {
    onSuccess: async (response) => {
      if (response.status >= 400) {
        // 处理请求失败的情况
      }
      const json = await response.data();
      if (json.code !== 200) {
        // 抛出错误或返回reject状态的Promise实例时，此请求将抛出错误
      }

      // 解析的响应数据将传给method实例的transform钩子函数，这些函数将在后续讲解
      return json.data;
    },
    onError: (error) => {
      console.log('error', error.message);
      return error.message;
    },
    onComplete: () => {}
  }
});
