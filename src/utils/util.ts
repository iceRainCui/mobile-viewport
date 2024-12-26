/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { showToast } from 'vant';

export function showPageToast(message: string) {
  showToast({
    message,
    position: 'bottom',
    className: 'mybottomToast',
  });
}

export const getCurrentTime = () => {
  const d = new Date();
  // 获取当前时间并打印
  const yy = `${d.getFullYear()}`.padStart(4, '0');
  const mm = `${d.getMonth() + 1}`.padStart(2, '0');
  const dd = `${d.getDate()}`.padStart(2, '0');
  const hh = d.getHours();
  const mf = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes();
  const ss = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds();
  return `${yy}-${mm}-${dd} ${hh}:${mf}:${ss}`;
};

export const removeURLParameter = (url: string, parameter: string) => {
  const urlparts = url.split('?');
  if (urlparts.length >= 2) {
    // 参数名前缀
    const prefix = `${encodeURIComponent(parameter)}=`;
    const pars = urlparts[1].split(/[&;]/g);

    // 循环查找匹配参数
    // eslint-disable-next-line no-plusplus
    for (let i = pars.length; i-- > 0; ) {
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        // 存在则删除
        pars.splice(i, 1);
      }
    }

    return urlparts[0] + (pars.length > 0 ? `?${pars.join('&')}` : '');
  }
  return url;
};

export function checkWeixin() {
  return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1;
}

// 判断移动端还是pc端
export function isMobile() {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent);
}
