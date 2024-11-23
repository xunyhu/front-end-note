# 第 7 章　企业级 React Hooks 项目架构与实战

## 7.1 创建项目

为了更好地运用前面学到的知识，我们现在一步步搭建一个基于 react hooks ts 的项目模块，并运用该模块实现一个简单的电商后台管理系统。

1. 安装脚手架。通过 Node.js 自带的 npm 命令安装 React 官方脚手架 react-app，具体命令如下，其中，-g 表示进行全局安装。

   npm install -g create-react-app

2. 通过脚手架创建项目。这里创建一个 TypeScript 的项目模板，名称为 my-react-hooks-ts，具体实现代码如下。

   `npx create-react-app react-hooks-ts --template typescript`

3. 进入项目目录

   cd my-react-hooks-ts

4. 在 src/App.tsx 项目入口文件中暂时只放置一段简单的文字描述，然后导出方法。

   ```tsx
   import React from "react";
   import "./App.css";

   function App() {
     return (
       <div className="App">
         <header className="App-header">hello world</header>
       </div>
     );
   }

   export default App;
   ```

5. 在入口的 index.tsx 文件中使用 ReactDOM 将导出组件挂载到 DOM 上。

   ```tsx
   import React from "react";
   import ReactDOM from "react-dom/client";
   import "./index.css";
   import App from "./App";
   // reportWebVitals脚手架自带的检测项目质量的包
   import reportWebVitals from "./reportWebVitals";

   const root = ReactDOM.createRoot(
     document.getElementById("root") as HTMLElement
   );
   root.render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );

   reportWebVitals();
   ```

6. 启动项目。创建成功后，通过在 package.json>scripts 文件中配置的命令启动项目。

   npm run start

## 7.2 eslintrc 配置

为了避免在多人协同开发时因每个人的编码习惯不一致而导致代码难以维护，我们使用 ESLint 来规范代码风格。

首先全局安装 ESLint，相关命令: `npm install -g eslint`。然后通过下面的命令初始化一份 ESLint 配置: `npx eslint --init`, 选择`To check syntax and find problems`。

项目的根目录下会有一个 eslint.config.mjs

## 7.3 Webpack 配置

通过 react 脚手架 create-react-app 创建的项目，如果要在其中进行 Webpack 配置，则需要在根目录下新建一个名称为 config-overrides.js 的文件。

Webpack 配置的步骤如下。

1. 引入 react-app-rewired 插件。该插件的作用是覆盖 create-react-app 的配置。
2. 安装 react-app-rewired，具体方法如下。

   `npm install react-app-rewired`

3. 修改 package.json 里的启动命令，并通过 react-app-rewired 来启动。

   ```json
   "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
   }
   ```

4. 新建 Webpack 配置文件 `config-overrides.js`。用于覆盖默认的 Webpack 配置，customize-cra 的作用是配置 Webpack 信息。首先执行以下命令安装 customize-cra 包。

   `npm install customize-cra`

5. 为了在打包的时候区分环境，并设置一些自定义的环境变量，我们需要安装 env-cmd，具体命令如下。

   `yarn add env-cmd`

6. 修改 package.json 里的启动配置，具体修改如下。

   ```json
   "scripts": {
        "start":"env-cmd -f .env.development react-app-rewired start",
        "build:test":"env-cmd -f .env.test react-app-rewired build",
        "build:pre":"env-cmd -f .env.pre react-app-rewired build",
        "build:prod":"env-cmd -f .env.production react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
   },
   ```

7. 在根目录下新建对应的环境变量文件，配置一个用于保存后端接口 API 的变量

   新建/.env.development 开发环境文件： REACT_APP_BASE_URL=http://baidu.com/dev

   新建/.env.test 开发环境文件： REACT_APP_BASE_URL=http://baidu.com/test

   新建/.env.pre 开发环境文件： REACT_APP_BASE_URL=http://baidu.com/pre

   新建/.env.production 开发环境文件： REACT_APP_BASE_URL=http://baidu.com/production

## 7.4 全局 Less 和 Ant 懒加载配置

前面进行了基础的 Webpack 配置，然而对于一般的企业项目开发，为了能够写出更加易于维护、复用性更高的 CSS，通常使用 Less 或者 Sass 扩展语言来编写 CSS。本章的案例项目使用的是 Less，因为我们使用的 UI 库是 Ant，而 Ant 内置的 CSS 是用 Less 编写的。

1. 全局 Less

   我们在编写 Less 的时候，通常会定义一些通用的样式变量，并且希望这些通用的样式变量能够在每个组件中直接使用，而不是每次都需要导入。style-resources-loader 这个库就是专门用于解决这个问题的。

   1）安装 style-resources-loader，具体命令如下。

   ```cmd
   npm install less
   npm install less-loader
   npm install style-resources-loader
   ```

   2）延续 7.3 节中的修改，增加全局 Less 变量文档导入的配置。修改 Webpack 配置文件 config-overrides.js。

   ```js
   //override 用于组合生成webpack配置信息
   const { override, addWebpackAlias } = require("customize-cra");
   const path = require("path");

   /**
    * 添加全局less
    * @param {*} config
    * @returns
    */
   const addLessStyle = () => (config) => {
     const loader = config.module.rules.find((rule) =>
       Array.isArray(rule.oneOf)
     ).oneOf;
     const lessIndex = loader.findIndex((item) => {
       return item.test && item.test.toString().indexOf(".less") != -1;
     });
     //如果存在less文件
     if (lessIndex != -1) {
       loader[lessIndex].use.push({
         loader: "style-resources-loader",
         options: {
           //全局引入公共的Scss文件
           patterns: path.resolve(__dirname, "src/theme/global.less"),
         },
       });
     }
     return config;
   };

   /**
    * https://www.jb51.net/javascript/302286wwo.htm
    * React脚手架config-overrides.js文件配置
    */
   module.exports = {
     webpack: override(
       //配置路径别名
       addWebpackAlias({
         ["@"]: path.resolve(__dirname, "src"),
       }),
       //添加全局less
       addLessStyle()
     ),
   };
   ```

2. Ant 懒加载

   在正式的企业级项目中，为了提升页面加载速度，往往需要在每个独立路由页面加载独立的 UI 资源文件，而不是在项目主入口一次性加载所有的 UI 资源文件。下面使用 babel-plugin-import 库来解决 UI 资源文件加载问题。

   1）安装 babel-plugin-import

   ```cmd
    npm install antd
    npm install babel-plugin-import
   ```

   2）修改 Webpack 配置文件 config-overrides.js。config-overrides.js 的内容如下。

3. 用 Day 替换 Moment

   1）`npm install antd-dayjs-webpack-plugin`

   2）修改 Webpack 配置文件 config-overrides.js。config-overrides.js 的内容如下。

   ```js
   //override 用于组合生成webpack配置信息
   const {
     override,
     addWebpackAlias,
     fixBabelImports,
     addLessLoader,
   } = require("customize-cra");
   const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");
   const path = require("path");

   /**
    * 添加全局less
    * @param {*} config
    * @returns
    */
   const addLessStyle = () => (config) => {
     const loader = config.module.rules.find((rule) =>
       Array.isArray(rule.oneOf)
     ).oneOf;
     const lessIndex = loader.findIndex((item) => {
       return item.test && item.test.toString().indexOf(".less") != -1;
     });
     //如果存在less文件
     if (lessIndex != -1) {
       loader[lessIndex].use.push({
         loader: "style-resources-loader",
         options: {
           //全局引入公共的Scss文件
           patterns: path.resolve(__dirname, "src/theme/global.less"),
         },
       });
     }
     return config;
   };

   //用Day替换Moment
   const addPlugins = () => (config) => {
     config.plugins.push(new AntdDayjsWebpackPlugin());
     return config;
   };

   /**
    * https://www.jb51.net/javascript/302286wwo.htm
    * React脚手架config-overrides.js文件配置
    */
   module.exports = {
     webpack: override(
       //配置路径别名
       addWebpackAlias({
         ["@"]: path.resolve(__dirname, "src"),
       }),
       //针对antd实现按需打包：根据import来打包
       fixBabelImports("import", {
         libraryName: "antd",
         libraryDirectory: "es",
         style: true,
       }),
       //使用less-loader对源码中的less的变量进行重新定制，设置antd自定义主题
       addLessLoader({
         javascriptEnabled: true,
         modifyVars: {
           hack: `true;@import"${require.resolve(
             "antd/lib/style/color/colorPalette.less"
           )}"`,
           "@primary-color": "#1DA57A",
         },
         localIdentName: "[local]--[hash:base64:5]",
       }),
       //添加全局less
       addLessStyle()
     ),
   };
   ```

至此一个基础的 Webpack 配置就写好了。

## 7.5 环境变量配置

真实的企业级项目的开发流程应该是这样的：开发环境(dev)→ 测试环境(beta)→ 预发布环境(pre)→ 生成环境(prod)。

既然存在多个环境，那么对应的接口地址肯定是不一样的。我们需要根据环境配置不同的接口地址，用不同的配置文件来区分不同的环境，以达到更好的解耦效果。

env-cmd 用于设置不同的环境变量。通过 env-cmd 进行设置，只需要根据不同环境创建对应的\*.env 文件，之后再通过执行命令设置对应的文件即可。

参考 7.3 步骤 5

## 7.6 技术与需求

准备工作已经完成，马上就要正式进入代码开发流程了，但在这之前，需要先来梳理一个后台管理系统包含哪些功能。

本章要完成的是一个电商后台管理系统，该系统主要包含以下功能。

1. 账号登录：账号数据本地存储，账号登录权限验证。
2. 账号菜单权限管理：菜单权限验证，系统权限验证。
3. 订单管理：订单列表查询。
4. 商品管理：商品列表查询。
5. 用户管理：用户列表查询。
6. 角色管理：角色列表查询。
7. 可视化数据统计管理：订单数据可视化。

技术方案选型如下。

1. React+Hooks（React 版本）​。
2. TypeScript（编程语言）​。
3. Webpack（打包工具）​。
4. Ant(UI)。
5. React Redux（数据流）​。
6. react-router-dom（React 路由）​。
7. Less（CSS 语言）​。
8. mock.js（接口模拟）​。
9. dayjs（日期格式化库）​。
10. redux-persist（Redux 数据本地化）​。
11. axios（AJAX 请求）​。
12. ECharts（图表可视化）​。
13. less-loader（设置 antd 自定义主题）​。
14. eslint-webpack-plugin（保存自动格式化代码）​。
15. babel-plugin-import（antd 按需导入）​。
16. svg-sprite-loader（SVG 图标）​。
17. style-resources-loader（全局 Less 变量）​。
18. BundleAnalyzerPlugin（打包文件分析）​。
19. antd-dayjs-webpack-plugin（将 Moment 替换为 Day）​。
20. customize-cra（重置 Webpack 配置）​。
21. env-cmd（设置环境变量）​。
22. eslintrc（代码规范化）​。

## 7.7 路由配置

为满足多人开发和维护项目的需要，我们将路由的文件以模块为单位进行定义，并统一从 index 导出。具体步骤如下。

1. 新增 Order 模块路由。

   假设有一个订单模块，该模块有订单列表、商品列表功能。我们在 src/routes 目录下新建 Order.ts 文件。

   react 中的 lazy 函数可以完成对路由的懒加载，也就是说，当前页面的所有资源文件都不会进入首页加载资源中，只有访问当前路由页面的时候才会独立拉取对应的资源文件，这样也就优化了项目的首次加载速度。

2. 导入所有模块路由。

   因为每个路由模块都是按照业务模块为单位文件划分的，所以我们需要在路由入口文件中导入所有模块的路由，然后汇总导出路由。

3. 使用路由。

   使用 lazy 异步加载组件，外层元素必须使用 Suspense 包裹，然后通过 Switch 包裹，实现页面路由的跳转切换。

## 7.8 HTTP 封装

在项目中，需要与后端进行数据交换。在实际开发过程中，通常使用 AJAX 来进行数据交换，使用高级库 Axios 来进行 HTTP 请求处理。

Axios 是一个基于 promise（主要解决回调问题）的 HTTP 库，可以用在浏览器和 Node.js 中。

Axios 的优势如下。

1. 可以在浏览器中创建 XMLHttpRequests。
2. 可以在 Node.js 中创建 HTTP 请求。
3. 支持 Promise API。
4. 可以拦截请求和响应。
5. 可以转换请求数据和响应数据。
6. 可以取消请求。
7. 支持重试机制。
8. 可以自动转换 JSON 数据。
9. 客户端支持防御 XSRF。

通常我们的业务中存在多种类型的请求，为了能够以更简单的方式在不同的模块中发送不同的请求，我们需要基于 Axios 进程进行 HTTP 封装。封装时常用的请求为 GET/POST/FormData。

### 1.封装 HTTP 请求

封装 HTTP 的步骤如下。

1. 通过 npm 安装 Axios
2. 在/src/apis 目录下新建 request.ts 文件。首先封装基础的 HTTP 请求和基础函数。

### 2.定义接口文件

### 3.导出所有模块

### 4.在业务组件中使用

## 7.9 登录页面开发

在登录页面上需要实现的功能包括：输入账号和密码，通过请求接口判断账号和密码是否正确。如果正确，则判断该账号是否有菜单相关权限。如果有，则将账号信息保存到本地缓存，然后跳转到当前账号可用的第一个菜单。若账号或密码不正确，则弹出错误提示。

使用 redux-persist 完成数据持久化（也就是将 Redux 中的数据同步到 localStorage 中）以避免当页面刷新的时候发生数据丢失问题。

## 7.10 Mock.js 配置

在企业开发中，通常会出现在开发页面 UI 时后端接口还没做好的情况。这时，后端开发人员只需将接口文档前置，将具体业务开发后置，前端开发人员就可以根据后端的接口文档字段，通过一些插件来模拟数据，从而达到两端同时开发、互不影响的效果。

基于上述要求，笔者推荐使用 `Mock.js 工具`。Mock.js 可以在不修改现有代码的情况下拦截 AJAX 请求，并创建返回模拟的接口数据。

正常的项目开发流程应该是：UI→ 定义接口 → 定义 Mock.js 接口 → 请求 mock 数据 →UI 完成 → 对接后端 → 完成对接。

Mock.js 接口需要完全依照正常/src/apis 中的接口 URL 规则来定义。mock 模块也可以按照/src/apis 中的接口规则来定义。这样就可以在后端接口完成后，通过修改 mock 状态，直接请求真实的后端接口。由于正常的开发中可能存在重复定义接口 URL 的可能，为了避免接口 URL 冲突，也可以定义一个变量作为命名空间。

## 7.11 权限封装

我们当前的系统权限分为两个类目：路由级别，也就是页面权限；按钮级别，也就是每个页面的操作按钮权限。

1. 路由级别权限控制

   要实现路由级别的权限管理，首先我们需要将路由页面与角色绑定

2. 按钮级别权限控制

   要实现按钮级别的权限控制，首先需要考虑的是如何校验权限。我们可以将需要校验的（按钮或页面等）目标组件包裹在一个公共组件(HOC)中，并在这个 HOC 中判断目标组件的权限编码是否存在于权限表里。若存在于权限表里，则表示有权限进行访问或渲染操作；若不存在于权限表里，则返回 null。

## 7.12 左侧菜单封装

## 7.13 Breadcrumb 封装

本节需要实现这样的效果：路由切换，或者刷新当前页面可展示当前页面的层级关系。这里我们使用 ant Breadcrumb 作为基础组件，然后加上我们自己的业务进行二次封装。

## 7.14 异步 Modal 封装

Modal 弹框几乎是每个产品中都要有的组件，尤其是在一些管理后台类的项目中，几乎每个页面都有。

实现一个 Modal 需要满足如下两点要求：

1. 弹框的状态变量应尽量保存在当前展示组件内，这样维护性较好，在当前组件中可以直观看到弹框组件的状态数据；
2. 在弹框组件显示前，不做前期的 DOM 渲染，从而避免当前页面弹框较多导致的性能问题。

## 7.15 实现 SVG Icon

SVG 具有如下优势：

1. 和传统的图像比起来，尺寸更小，且可压缩性更好；
2. SVG 中的图像是可以编辑的，可以直接修改其颜色等属性；
3. SVG 不会失帧，这保证了图标具有高清晰度和 UI 高保真度。

## 7.16 打包与上线

随着前端自动化进程的发展，前端项目的部署也变得更加自动化、简单化、工程化。当前主流的部署方案如下：

1. GitLab + Jenkins + Nginx；
2. GitLab + Jenkins + Docker + Kubernetes + Nginx；
3. GitLab + Walle + Nginx；
4. 宝塔 + Nginx；
5. Xshell 手动部署 + Nginx；
6. 阿里云部署；
7. 腾讯云部署。

不管部署方案如何五花八门，我们只需要学会基础的流程，其他方面就很容易上手。其中，前端静态项目部署基本都会涉及 Nginx。Nginx 对于前端开发人员是非常有必要花时间熟悉的。一个优秀的前端开发人员不仅要具有编码的能力，还要对上下游技术（如 Nginx）有一定了解。

学习 Nginx 的流程为：了解 Nginx 是什么、能做什么、有什么优势，然后进行一些基础实践。

接下来就是发布了，我们首先需要具有满足以下条件的发布环境：

1. 有自己的服务器（没有的可以去阿里云等平台购买一台，最便宜的仅需几元钱）​；
2. Linux 上已经安装了 Nginx；
3. 正确配置了 Nginx。

其中需要重点强调的就是正确配置 Nginx。在服务器上安装完 Nginx 后，修改 Nginx 目录下的 conf 目录中的 nginx.conf 文件
