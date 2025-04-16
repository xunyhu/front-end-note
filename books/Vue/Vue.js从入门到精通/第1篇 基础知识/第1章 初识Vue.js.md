# 第 1 章 初识 Vue.js

## 1.1 什么是 Vue.js

1. Vue.js 简介

   Vue.js 是一套用于构建用户界面的渐进式框架。与其他重量级框架不同的是，它只关注视图层，采用自底向上增量开发的设计。Vue.js 的目标是通过尽可能简单的 API 来实现响应的数据绑定和组合的视图组件。它不仅容易上手，还非常容易与其他库或已有项目进行整合。

   和其他前端框架一样，Vue.js 同样拥有“一切都是组件”的理念。

2. MVVM 开发模式

   Vue.js 采用的是 MVVM(Model-View-ViewModel)的开发模式，它本质上是 MVC 模式的改进版。在 MVVM 模式中，Model 代表数据模型，可以在 Model 中定义操作数据的业务逻辑。View 代表 UI 组件，它负责将数据模型转化成 UI 并展现出来。ViewModel 用于监听数据的改变并处理用户交互。在 MVVM 架构下，View 和 Model 之间并没有直接的联系，而是通过 ViewModel 进行交互。ViewModel 通过双向数据绑定把 View 层和 Model 层连接起来，而 View 和 Model 之间可以自动实现同步，因此开发者只需关注业务逻辑，不需要手动操作 DOM，也不需要关注数据状态的同步问题，数据状态的维护完全由 MVVM 来统一管理。

3. Vue.js 的特点

   Vue.js 的主要特点如下：

   1. 轻量级。

      相比较 AngularJS 和 ReactJS 而言，Vue.js 是一个更轻量级的前端库，不但容量非常小，而且没有其他的依赖。

   2. 数据绑定。

      Vue.js 最主要的特点就是双向的数据绑定。在传统的 Web 项目中，将数据在视图中展示出来后，如果要修改视图，需要通过获取 DOM 的方法进行修改，这样才能维持数据和视图的一致。而 Vue.js 是一个响应式的数据绑定系统，在建立绑定后，DOM 将和 Vue 对象中的数据保持同步，这样就无须手动获取 DOM 的值再同步到 js 中。

   3. 应用指令。

      同 AngularJS 一样，Vue.js 也提供了指令这一概念。指令用于在表达式的值发生改变时，将某些行为应用到绑定的 DOM 上，通过对应表达式值的变化就可以修改对应的 DOM。

   4. 插件化开发。

      与 AngularJS 类似，Vue.js 也可以用来开发一个完整的单页应用。在 Vue.js 的核心库中并不包含路由、Ajax 和状态管理等功能，但是可以非常方便地加载对应的插件来实现这样的功能。例如，vue-router 插件提供了路由管理的功能，Vuex 插件提供了状态管理的功能。

## 1.2 安装 Vue.js

1. 使用 CDN

   CDN 的全称是 content delivery network，即内容分发网络。它是构建在现有的互联网基础之上的一层智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发和调度等功能模块，使用户可就近获取所需内容，解决 Internet 网络拥挤的状况，提高用户访问网站的响应速度。

   Vue 3.0 的官网中提供了一个 CDN 链接`https://unpkg.com/vue@next`​，在项目中直接通过`<script>`标签引入即可，代码如下：

   ```js
   <script src="https://unpkg.com/vue@next"></script>
   // 测试发现需要改成 @next -> @3
   ```

2. 使用 NPM

   NPM 是一个 Node.js 包管理和分发工具，它支持很多第三方模块。在安装 Node.js 环境时，由于安装包中包含了 NPM，因此不需要再额外安装 NPM。在使用 Vue.js 构建大型应用时推荐使用 NPM 方法进行安装。使用 NPM 安装 Vue.js 3.0 的命令如下：

   ```cmd
   npm install vue@next
   ```

   NPM 的官方镜像可从国外的服务器下载。为了节省安装时间，推荐使用淘宝 NPM 镜像 CNPM。将 NPM 镜像切换为 CNPM 镜像的命令如下：

   ```cmd
   npm install -g cnpm --registry=https://registry.npm.taobao.org
   ```

   之后就可以直接使用 cnpm 命令安装模块。命令格式如下：

   ```cmd
   cnpm install 模块名称
   ```

3. 使用 Vue CLI

   Vue CLI 是 Vue 官方提供的一个脚手架工具，使用该工具可以快速搭建一个应用。

## 1.3 Vue.js3.0 的新特性

Vue.js 3.0 并没有延用 Vue.js 2.x 版本的代码，而是采用 TypeScript 进行重新编写，新版的 API 全部采用普通函数。Vue.js 3.0 新特性如下：

1. 更好的性能。

   Vue.js 3.0 重写了虚拟 DOM 的实现，并对模板的编译进行了优化，提升了组件初始化的速度。和 Vue 2.x 相比，更新速度和内存占用方面的性能都提升了不少。

2. Tree-Shaking 支持。

   和 Vue 2.x 相比，Vue.js 3.0 对无用的代码模块进行了删除，仅打包真正需要的模块。

3. 组合 API。

   Vue 3.0 新增的 Composition API 可以完美地替代 Vue 2.x 中的 mixin，使用户可以更灵活地复用代码，并且 Compoxition API 可以很好地进行类型推断，解决了多组件之间的逻辑重用问题。

4. 碎片(flagmen)。

   在 Vue 2.x 中，组件需要有一个唯一的根节点，而 Vue 3.0 组件模板不再限于单个根节点，可以有多个根节点。

5. 传送(teleport)。

   使用 teleport 内置组件可以将模板代码移动到 Vue 程序之外的其他位置。

6. 悬念(suspense)。

   suspense 内置组件可以在嵌套层级中等待嵌套的异步依赖项，支持异步组件。

7. 更好的 TypeScript 支持。

   Vue 3.0 代码具有更好的类型支持。开发人员可以采用 TypeScript 开发 Vue 应用，无须担心兼容性问题，结合 TypeScript 插件使开发更高效，还可以拥有类型检查、自动补全等功能。

8. 自定义渲染器 API。

   用户可以使用自定义渲染器 API 来尝试与第三方库集成，如编写 WebGL 自定义渲染器。

## 1.4 WebStorm 的下载和安装

WebStorm 是 JetBrains 公司旗下一款 JavaScript 开发工具，被广大中国 JavaScript 开发者誉为 Web 前端开发神器、最强大的 HTML5 编辑器、最智能的 JavaScript IDE 等。WebStorm 添加了对 Vue.js 的语法支持，通过安装插件的方式识别以.vue 为后缀的文件，在 WebStorm 中用于支持 Vue.js 的插件的名称就叫 Vue.js。

## 1.5 第一个 Vue.js 程序
