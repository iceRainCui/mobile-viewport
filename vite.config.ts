import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import { viteVConsole } from 'vite-plugin-vconsole';
import basicSsl from '@vitejs/plugin-basic-ssl';

const pathResolve = (dir: string) => resolve(__dirname, dir);
export default ({ mode }) => {
  // 获取环境变量
  const env: Partial<ImportMetaEnv> = loadEnv(mode, process.cwd());

  return defineConfig({
    base: '/', //类似publicPath  解决白屏
    define: {
      'process.env': env,
    },
    resolve: {
      alias: {
        '@': pathResolve('src'), // path.resolve中，'./src' 等于 'src'
      },
    },
    plugins: [
      vue(),
      basicSsl(),
      //移动端调试
      viteVConsole({
        entry: pathResolve('src/main.ts'), // 入口文件
        localEnabled: true, // 本地是否启用
        enabled: 'true', // 是否启用
        config: {
          maxLogNumber: 1000,
          theme: 'dark', // 主题颜色
        },
      }),
      //自动按需引入vant组件和样式 插件除了会自动引入配置了的ui组件库，还会默认引入 src/compoents 下的组件，也可通过 dirs 选项指定其他路径
      Components({
        dirs: ['src/components'], // 目标文件夹
        resolvers: [VantResolver()], // ui库解析器，也可以自定义，需要安装相关UI库
        dts: 'src/components.d.ts',
        extensions: ['vue'], // 文件类型
      }),
    ],
    build: {
      target: ['chrome64'],
      outDir: 'dist', // 指定打包路径，默认为项目根目录下的 dist 目录
      sourcemap: env.VITE_BUILD_SOURCEMAP === 'true',
      chunkSizeWarningLimit: 1500, // chunk 大小警告的限制（以 kbs 为单位）
    },
    server: {
      host: 'dev.online.360.cn',
      port: 3000,
      open: true, //设置服务启动时是否自动打开浏览器
      https: true,
      proxy: {
        '/api': {
          target: 'https://demo.com',
        },
      },
    },
    //但 Vite 也同时提供了对 .scss, .sass, .less, .styl 和 .stylus 文件的内置支持。没有必要为它们安装特定的 Vite 插件，但必须安装相应的预处理器依赖：
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "${pathResolve('src/styles/index.scss')}";`,
        },
      },
    },
  });
};
