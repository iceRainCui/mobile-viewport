import { Base64 } from 'js-base64';

export const Storage = {
  removeItem(key: string, more?: boolean) {
    localStorage.removeItem(key);
    if (more) {
      localStorage.removeItem(`${key}Data`);
      localStorage.removeItem(`${key}DataErrmsg`);
      localStorage.removeItem(`${key}DataError`);
    }
  },
  getItem(key: string, type?: string) {
    const item = localStorage.getItem(key);
    if (type === 'noparse' || !item) {
      return item;
    }
    if (type === 'base64') {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      return JSON.parse(Base64.decode(item));
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return JSON.parse(item);
  },
  /**
   * @param key
   * @param value
   */
  setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  clear() {
    localStorage.clear();
  },
};
