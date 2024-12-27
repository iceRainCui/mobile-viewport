declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
declare module 'js-cookie';
declare module 'hevue-img-preview';

declare interface Window {
  QHPassCaptcha: QHPassCaptcha;
  SafeCloud_AppUser: SafeCloudAppUser;
  SafeCloud_AppPage: SafeCloudAppPage;
  SafeCloud_AppRequest: SafeCloudAppRequest;
  SafeCloud_AppResponse: SafeCloudAppResponse;
  SafeCloud_AppAction: SafeCloudAppAction;
  SafeCloud_LoginCaptcha: SafeCloudLoginCaptcha;
  SafeCloud_PayRequest: SafeCloudPayRequest;
  SafeCloud_ShareRequest: SafeCloudShareRequest;
  SafeCloud: SafeCloud;
  handelResponce: unknown;
  GetTerminalFeedbackListCallback: unknown;
  SafeCloudGetQCallback: unknown;
  GetCateListCallback: unknown;
  GetTerminalFeedbackDetailCallback: unknown;
  CloseTerminalFeedbackCallback: unknown;
  UploadFileCallback: unknown;
  FeedbackReplyCallback: unknown;
  SafeCloudGetUserinfoCallback: unknown;
  GetWorkorderListCallback: unknown;
  GetCateCallback: unknown;
  DoCancellationPostCallback: unknown;
  WorkorderPostCallback: unknown;
  DoreplyPostCallback: unknown;
  GetWorkorderDetailCallback: unknown;
  GetLetterListCallback: unknown;
  GetManagementListCallback: unknown;
  GetLetterDetailCallback: unknown;
  GetUserSettingCallback: unknown;
  MessageSettingCallback: unknown;
  SafeCloudGetQForUploadCallback: unknown;
  GetUploadFileCallback: unknown;
  SignOffAccountCallback: unknown;
  SafeCloudGetLoginMobileCallback: unknown;
  PhoneLoginCallback: unknown;
  VerificationCodeCallback: unknown;
  GetSubInfoCallback: unknown;
  WeeklySubSetCallback: unknown;
  WeeklyDataCallback: unknown;
  WeeklyIsGrantCallback: unknown;
  WeeklyGrantCallback: unknown;
  WeeklyIsGrantSoftwareCallback: unknown;
  GetPersonalIdentityInfoCallback: unknown;
  VerifyVerificationCodeCallback: unknown;
  SendVerifyCodeCallback: unknown;
  GetLiveDetectionH5LinkCallback: unknown;
  NotifyServerGetVerifyRetCallback: unknown;
  safe: {
    getSafeInstStatus: (arg: string) => Promise<boolean>;
  };
  JSBridge: {
    callNative: (
      arg: string,
      params: string,
      callback: (arg: string) => void
    ) => void;

    handleNativeMessage: (arg: string) => void;
  };
}
declare interface SafeCloud {
  postMessage: (arg: string) => void;
}
declare interface SafeCloudShareRequest {
  shareWebpageByWeixin: (
    title: string,
    description: string,
    url: string
  ) => boolean;
}
declare interface SafeCloudPayRequest {
  payByWeixin: (arg: string, arg2?: string) => void;
  payByZFB: (arg: string, arg2?: string) => void;
}
declare interface SafeCloudLoginCaptcha {
  onClosePage: () => void;
  onVerifySuccess: (arg: string, arg2?: string) => void;
}
declare interface QHPassCaptcha {
  init: (any) => object;
}
declare interface UserInfo {
  login_mobile: string;
}
declare interface SafeCloudAppUser {
  setToken: (arg: string, arg2: string) => string;
  clearUserInfo: () => void;
  getUserInfo: () => string;
  getTeam: () => string;
}
declare interface SafeCloudAppPage {
  closePage: () => void;
  jumpPage: (arg: string) => void;
  jumpPageWithBackReload: (arg: string) => void;
  reloadPage: () => void;
  setStatusBarVisibility: (isVisible: boolean) => void;
  getStatusBarVisibility: () => void;
  getStatusBarHeight: () => number;
  // 通知 Andorid 重新获取个人认证信息
  realManAuthChange: () => void;
}
declare interface SafeCloudAppRequest {
  request: (arg?: string, arg2?: string) => string;
  requestX: (arg?: string) => string;
  userInfo: () => string;
}
declare interface SafeCloudAppResponse {
  response: (arg: string, arg2: string) => string;
}
declare interface SafeCloudAppAction {
  destroyTeam: () => void;
  showDeployInfoDialog: () => void;
}
declare interface CaptchaResult {
  success: boolean;
  token?: string;
  vd?: string;
}

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_APP_API_BASE_URL: string;
  readonly VITE_BUILD_SOURCEMAP: string;
  readonly VITE_BUILD_DROP_CONSOLE: string;
  readonly VITE_BUILD_VCONSOLE: string;
  readonly VITE_SERVER_URL: string;
  readonly VITE_ACTIVE_ICON: string;
  readonly VITE_ACTIVE_AGREE_ICON: string;
  readonly VITE_NACTIVE_AGREE_ICON: string;
  readonly VITE_NACTIVE_ICON: string;
  readonly VITE_CODESDK: string;
  readonly VITE_CODEAPPID: string;
  readonly VITE_BASE_URL: string;
  readonly MODE: string;
  readonly VITE_LOGIN_URL: string;
  readonly VITE_WEBSITE_URL: string;
  readonly VITE_WORK_URL: string;
  readonly VITE_CUSTOMER_AVATAR: string;
  readonly VITE_USER_AVATAR: string;
  readonly VITE_PROFESSIONALSAFETY_CODE: string;
  readonly VITE_COMPREHENSIVE_CODE: string;
  readonly VITE_UNIVERSAL_CLOUD_CODE: string;
  readonly VITE_ONEDAY_SECONDS: number;
  readonly VITE_CLOUDDATA_CODE: string;
  readonly VITE_HOMEVERSION_CODE: string;
  readonly VITE_CONSOLE_API: string;
  // 图形验证码 APPID，和 IDaaS 不同，这个是走我们服务端的验证逻辑
  readonly VITE_ESC_SERVER_CODEAPPID: string;
  // 环境
  readonly NODE_ENV: string;
  // 更多环境变量...
  readonly VITE_PORTAL_API_BASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.png' {
  const value: any;
  export default value;
}
