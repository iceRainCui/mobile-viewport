# 《基于 Vue3 的跨平台前端框架》

![案例](https://p4.ssl.qhimg.com/t110b9a930112ca272bafc061bf.gif)

## 一、引言



### 1. 你是否还在纠结于 rem 适配的繁琐计算与兼容性隐患

### 2. 你是否担心用了 vw 适配方案后在PC端表现不佳而痛苦？

### 3. 你是否还在如何在不同平台上确保统一且精准的样式适配而烦恼

### 4. 你是否为了搭建一个企业级应用而大费周折，各种lint和hook让你配置的晕头转向

### 5. 在andriod和ios端如何获取网络日志和log信息，是否还在为搭建虚拟机做适配而烦恼



## 💐💐💐本框架解决上面问题而诞生!!💐💐💐
主要解决一个页面同时跑在andriod端、ios端、pc端运行，并且可以获取到日志信息，并添加jsbridge，实现js与native的交互



## 二、技术架构

核心

- `vue3`、`vite`、`vant`、`pinia` 、`ts`

适配

- autoprefixer:自动为 CSS 属性添加浏览器前缀
- px2viewport: `px` 到 `vw` 的转换配置
- postcss-mobile-forever: 

### 目录结构

```bash
mobile-viewport
├─.env                              # 通用环境变量
├─.env.development                  # 开发环境环境变量
├─.env.production                   # 生产环境环境变量
├─.env.regression                   # 预发环境环境变量
├─.env.test                            # 测试环境环境变量
├─.eslintignore                     # eslint忽略配置文件
├─.eslintrc-auto-import.json        
├─.eslintrc.cjs                     # eslint规则
├─.gitignore                        # git忽略文件
├─.npmrc                            # npm源配置
├─.prettierrc.cjs                   # prettier配置
├─.stylelintrc.json                 # stylelint配置
├─README.md
├─commitlint.config.cjs             # commitlint配置
├─components.d.ts
├─index.html
├─package-lock.json
├─package.json
├─postcss.config.cjs                # 适配核心目录
├─tsconfig.json                     # ts配置
├─tsconfig.node.json
├─vite.config.ts                    # vite配置
├─src                               # 源码
|  ├─App.vue
|  ├─components.d.ts
|  ├─main.ts                        # 入口文件
|  ├─vite-env.d.ts
|  ├─utils
|  |   ├─request.ts                 # axios封装
|  |   ├─storage.ts                 # storage封装
|  |   ├─jsbridge.ts                # jsbridge封装
|  |   └util.ts                     # common的utils
|  ├─styles
|  |   ├─common.scss                # 公共样式
|  |   ├─index.scss
|  |   ├─vant.scss                  # 自定义vant样式
|  |   └variables.scss
|  ├─store                          # store目录
|  |   ├─index.ts
|  |   ├─modules
|  |   |    ├─user
|  |   |    |  └index.ts
|  ├─router                         # 路由配置
|  |   └index.ts
|  ├─pages                          # 页面目录
|  |   ├─login
|  |   |   └index.vue               # 示例页面
|  ├─components                     # 公共组件
|  ├─assets                         # 本地资源目录
|  ├─api                            # api接口文档 (包含接口和类型)
|  |  ├─login
|  |  |   ├─index.ts
|  |  |   └interface.ts
├─public
├─.husky                            # husky配置githook
|   ├─commit-msg
|   ├─pre-commit
```



## 三、关于适配

### 关于 rem 适配的痛点

- 在前端开发中，rem 适配方案曾经被广泛应用，然而它存在一些不容忽视的缺点。
- 痛点1: **计算复杂**：rem 的值是基于根元素（html 元素）的字体大小计算得出的。在进行响应式设计时，需要根据不同的屏幕宽度动态计算根元素的字体大小，这涉及到复杂的 JavaScript 代码逻辑。例如，在处理不同屏幕尺寸的设备时，要精确计算出合适的 rem 值，以保证页面元素的尺寸和间距在各种设备上都能适配得当，这增加了开发的复杂性和出错的概率。
- 痛点2: **兼容性问题**：虽然 rem 在现代浏览器中得到了较好的支持，但在一些老旧版本的浏览器中，可能会出现兼容性问题，导致页面样式错乱。这对于企业级应用来说是一个严重的隐患，因为企业用户可能使用各种不同版本的浏览器来访问应用，而确保在所有浏览器上的一致性和稳定性是至关重要的。
- 痛点3: **字体大小限制**：当使用 rem 来设置字体大小时，由于其是相对单位，可能会受到根元素字体大小的限制。在某些情况下，如需要在高分辨率屏幕上显示较大且清晰的字体时，rem 可能无法灵活地满足这一需求，从而影响页面的可读性和用户体验。

### 那如何在不同平台上确保统一且精准的适配？

- **痛点**：PC 端和移动端屏幕尺寸、分辨率、像素密度等差异巨大，要实现统一的视觉效果和良好的用户体验极具挑战。例如，在 PC 端合适的字体大小和间距在移动端可能显得过大或过小，导致页面布局混乱、信息难以阅读，影响用户对产品的第一印象和使用意愿。
- 使用媒体查询（Media Queries）
  - **实现方式**：通过在 CSS 中使用 `@media` 规则，针对不同的屏幕宽度范围（如 `max-width` 和 `min-width`）定义不同的样式规则。例如，对于小屏幕的移动设备，可以设置较小的字体大小、紧凑的元素间距以及简化的布局结构；而对于大屏幕的 PC 端，则可以适当增大字体、扩展元素间距并采用更复杂的多栏布局。
  - **优点**：简单直接，能够根据常见的屏幕尺寸断点进行样式的定制，对于一些简单的页面布局适配场景较为有效，不需要额外引入复杂的工具或库。
  - **缺点**：需要手动定义多个屏幕尺寸范围的样式，当页面布局复杂且需要适配的屏幕尺寸较多时，代码会变得冗长和难以维护。而且对于一些特殊的屏幕尺寸或高分辨率设备，可能无法精确适配，导致部分设备上的显示效果不佳。
- Flexbox 和 Grid 布局结合使用
  - **实现方式**：利用 CSS 的弹性盒子布局（`display: flex`）和网格布局（`display: grid`）的特性，构建灵活且自适应的页面布局。`Flexbox` 可以方便地实现元素的水平或垂直方向的排列和分布，对于组件内部元素的对齐和自适应调整非常有用；`Grid` 布局则更擅长创建复杂的二维布局结构，能够精确控制行和列的大小、间距以及元素的位置。例如，可以使用 `Grid` 布局创建一个响应式的页面网格，将页面划分为不同的区域，然后在每个区域内使用 `Flexbox` 来排列和对齐具体的内容元素，使页面在不同屏幕尺寸下都能保持合理的布局和比例。
  - **优点**：能够提供强大而灵活的布局能力，适应各种复杂的页面结构需求，并且在现代浏览器中具有良好的兼容性。可以通过相对简单的 CSS 代码实现高度自适应的布局效果，减少了对固定像素值的依赖，有助于实现统一的样式适配。
  - **缺点**：对于一些特殊的布局需求，可能需要深入理解 `Flexbox` 和 `Grid` 的工作原理和属性，学习曲线相对较陡。在某些老旧浏览器中，对 `Grid` 布局的支持可能不完全，需要添加相应的浏览器前缀或使用 Polyfill 来确保兼容性，这会增加一定的开发成本和复杂性。
- 最佳实现：Viewport + vw + postcss-mobile-forever
  - 实现方式
    - **Viewport 设置**：在 HTML 页面的 `<head>` 标签中，通过 `<meta name="viewport" content="width=device-width, initial-scale=1.0">` 这样的设置，确保页面在移动设备上的显示宽度与设备的实际宽度一致，避免默认的缩放行为。
    - **vw 单位应用**：将页面元素的尺寸（如宽度、高度、间距、字体大小等）使用相对视口宽度（`vw`）单位进行设置。例如，一个宽度为 `50vw` 的元素，在任何屏幕宽度下，其宽度始终占据视口宽度的 50%，能够自然地根据屏幕大小进行自适应调整。通过这种方式，可以实现元素在不同屏幕尺寸下的等比例缩放。
    - **postcss-mobile-forever 优化**：这个 PostCSS 插件在 `vw` 适配的基础上进一步优化了移动端和 PC 端的样式适配。它允许开发者设置 `viewportWidth` 和 `maxDisplayWidth` 等参数，确保页面在 PC 端显示时，最大宽度不会超过指定值，原理是使用了vmax和vmin来限制最大宽度和最小宽度。
    - 同时结合Flexbox + Grid布局实现适配
  - 优点
    - **精准适配**：能够根据视口宽度精确地计算和调整元素的尺寸，无论是在移动端的小屏幕还是 PC 端的大屏幕上，都能实现高度精准的样式适配，确保页面元素的显示效果始终如一，为用户提供优质的视觉体验。
    - **高效开发**：通过使用相对单位和 PostCSS 插件的自动化处理，大大减少了手动计算和编写复杂样式代码的工作量。开发者可以更加专注于页面的设计和业务逻辑的实现，提高了开发效率，同时也降低了因手动计算错误导致样式问题的风险。
    - **良好兼容性**：`viewport` 单位在现代浏览器中得到了广泛的支持，而 `postcss-mobile-forever` 插件可以通过自动添加浏览器前缀等方式，确保在大多数浏览器上的兼容性，即使在一些老旧版本的浏览器中，也能通过合理的降级处理或 Polyfill 提供基本的样式适配支持，保证了应用在不同浏览器环境下的可用性。
  - 缺点
    - **学习成本**：对于不熟悉 `vw` 单位和 PostCSS 插件配置的开发者来说，需要花费一定的时间学习和理解相关的概念和技术，尤其是在处理一些复杂的样式场景时，可能需要深入掌握 `postcss-mobile-forever` 插件的各种参数配置和使用技巧，才能充分发挥其优势。
    - **小数像素问题**：在使用 `vw` 单位时，由于屏幕宽度的计算可能会产生小数像素值，在某些情况下可能会导致元素的边缘出现模糊或对齐不准确的问题。虽然可以通过一些 CSS 技巧（如 `transform: translateZ(0)` 等）来缓解，但这也增加了一定的复杂性和潜在的兼容性风险。

## 四、开发环境优化与工具配置

### （一）Node 版本管理

使用 Node 版本大于 14.18。在本地存在多个 Node 版本的情况下，推荐使用 `nvm`（Node Version Manager）进行版本切换，确保开发环境的稳定性和一致性。。

## 五、开发流程与命令

### （一）本地开发

```bash
npm install

npm run dev
```

### （二）打包构建

1. **测试包构建**：执行 `npm run build:test`。
2. **正式包构建**：运行 `npm run build`。

## 六、关键技术实现与优化策略

### （一）响应式布局与适配

1. 基于PostCSS 插件配置。

### （二）性能优化与状态管理

1. **Vue-Lazyload**：用于实现图片的懒加载功能
2. **Vue-Router 封装**：对 Vue Router 进行了封装，
3. **Pinia 状态管理**

### （三）代码质量保障

1. **ESLint 和 Stylelint**：分别用于对 JavaScript 和 CSS/SCSS 代码进行静态代码检查和风格规范检查。
2. **Lint-Staged 和 Githook**：`Lint-Staged` 与 `Githook`（如 `pre-commit` 钩子）相结合，实现了在代码提交前对暂存区的代码进行自动化检查和修复。

### （四）移动端调试辅助

`VConsole`：在移动端开发中，`VConsole` 是一个强大的调试工具。它可以在手机端方便地查看日志信息，包括 JavaScript 中的 `console.log` 输出、网络请求信息、页面性能数据等。通过在代码中根据环境判断是否引入 `VConsole`。



## 七、参考资料

- [Vite 官方文档](https://cn.vitejs.dev/)
- [Vant 官方文档](https://vant-ui.github.io/vant/#/zh-CN/quickstart)