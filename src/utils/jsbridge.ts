// 创建 JSBridge 命名空间
const { JSBridge } = window;

// 用于生成唯一的回调标识
let callbackIdCounter = 0;
const generateCallbackId = () => {
  callbackIdCounter++;
  return `callback_${callbackIdCounter}`;
};

// 存储回调函数的对象，以 callbackId 为键，回调函数为值
const callbacks: { [key: string]: (result: any) => void } = {};

// 调用原生方法的通用函数
JSBridge.callNative = function (method, params, callback) {
  const callbackId = callback ? generateCallbackId() : null;
  if (callback) {
    callbacks[callbackId] = callback;
  }
  const message = {
    method,
    params: params || {},
    callbackId,
  };
  // 发送到客户端
  console.log('发送消息到原生应用:', message);
  // window.postMessage(JSON.stringify(message), '*');
};

// 处理原生回传消息的函数，由原生应用调用 JavaScript 环境时触发（具体的触发方式根据原生实现而定）
JSBridge.handleNativeMessage = <T>(message: string) => {
  try {
    const { callbackId, result, error } = JSON.parse(message) as {
      callbackId: string;
      result: T;
      error: string;
    };
    if (error) {
      console.error('原生应用返回错误:', result);
      // 可以在这里添加更具体的业务错误处理逻辑，比如提示用户
      return;
    }
    if (callbackId && callbacks[callbackId]) {
      callbacks[callbackId](result);
      delete callbacks[callbackId];
    }
  } catch (e) {
    console.error('解析原生消息出错:', e);
  }
};

// 示例用法：调用原生的获取用户信息功能（假设存在这个原生方法）
/*
const getUserInfo = () => {
  return new Promise((resolve, reject) => {
    JSBridge.callNative('getUserInfo', null, (result) => {
      if (result) {
        resolve(result);
      } else {
        reject(new Error('获取用户信息失败'));
      }
    });
  });
};
*/

export default JSBridge;
