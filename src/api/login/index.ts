import { request, type RetDataType } from '@/utils/request';
import type { Codeinfo } from './interface';

/**
 * 获取验证码
 * @param mobile 手机号
 * @param {string} vd 拖拽图形验证码校验成功后返回的加密串
 * @param {string} token 拖拽图形验证码校验成功后返回的流水号
 */
export function captcha(
  mobile: string,
  vd: string,
  token: string
): Promise<RetDataType<Codeinfo>> {
  const data = {
    type: 6,
    mobile,
    vd,
    token,
    sure: 1,
  };
  return request({
    url: `/idaas/captcha`,
    data,
    method: 'post',
  });
}
