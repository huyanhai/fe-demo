import request from '@/plugins/request';

export function download(params: undefined) {
  return request.Get('/api/download', { params });
}
