# 第 2 章 React 详解

React 技术栈是当下前端最火的渐进式框架之一，起源于 Facebook 的内部项目，于 2013 年在 github 上开源。本章详细讲解 React 技术栈的使用和源码，主要学习 React 技术栈的核心内容。

## 2.1 为什么使用 React

React 是一个用于构建用户界面的 JavaScript 库，具有组件化、声明式等优点，另外由于其优秀的 DOM 性能优化，使其一面世就广受用户追捧。

本章从专注于视图层、组件化开发和声明式编程、Virtual DOM 几个特征来说明为什么使用 React。

单纯的 React.js 只是一个 JS 库，而其整个技术栈就是一个渐进式的框架。`渐进式框架`：主张最少，也就是可以只用它其中的一部分，比如，开始搭建项目时，开发者只需要用到 React，就可以只引入 React，当项目有了新的需求之后，可以再引入其他的类库，如路由库、状态管理库等。

### 2.1.1 专注于视图层

在编写前端项目的时候，经常会涉及对 DOM 的操作。开始时用户都是使用原生 JS 直接去操作 DOM 节点，但是原生 API 实在不好用并且还有很多兼容方面的问题，所以 jQuery 就横空出世了。

很长一段时间内，JQuery 以其简洁的 API 俘获着前端开发者的心。但 JQuery 只是简化了 DOM 操作，在性能优化上并没有做什么处理。随着前端的业务越来越复杂，想要写出如微博这些交互比较复杂的页面，JQuery 就远远不够了，React 正是在这种背景下诞生的。

React 专注于 View 层的解决方案，Facebook 官方也说 React 就是一个 View 层，也就是视图层。什么意思呢？就是在使用 React 的时候，只要告诉 React 需要的视图长什么样，或者告诉 React 在什么时间点，把视图更新成什么样就可以了，剩下的视图的渲染、性能的优化等一系列问题交给 React 搞定即可。

### 2.1.2 组件化开发和声明式编程

### 2.1.3 Virtual DOM

React 的工作方式：建立 state，根据 state 生成视图，修改 state，生成新的 state，根据新 state 生成视图。

在这个过程中，只要对 state 进行修改，React 就会重新渲染视图。那大量的 DOM 操作会对页面性能造成影响吗？这就涉及 React 中的一项核心技术—`虚拟 DOM（Virtual DOM）`​。

## 2.2 ReactDOM

### 2.2.1 React 引入方式

在项目中引入 React 有两种方式，一种是通过模块化的方式进行引入，但这种方式，需要配置一些开发环境，稍后再进行介绍。另外一种引入方式是直接在页面上通过 script 引入。

在这里引入两个 JS 文件，react.js 是 React 的核心文件，如组件、Hooks、虚拟 DOM 等，都在这个文件中。
react-dom.js 则是对真实 DOM 的相关操作，如将虚拟 DOM 渲染到真实 DOM 里，或者从真实 DOM 中获取节点。

### 2.2.2 ReactDOM

ReactDOM 对象是 react-dom.js 提供的一个用于进行 DOM 操作的对象，在该对象下有一系列 API 用于操作 DOM。在 React 中需要和真实的 DOM 打交道时都需要通过 ReactDOM 的 API 进行。当然也可以使用一些原生 DOM 的 API，但并不推荐这么做。

使用 ReactDOM 要注意 react-dom.js 依赖于 react.js，在引用的时候一定先引入 react.js。

ReactDOM 提供的 API

1. render
2. hydrate
3. findDOMNode
4. unmountComponentAtNode
5. createPortal

除了 render 方法之外，不建议读者直接在项目中使用这些 API，并且在实际项目中一般也没有使用 render 以外的 API 的需求。

## 2.3 React 视图渲染

构建视图一直是 React 的重点，从 createElement 到 JSX，React 构建视图的方法一直深受开发者喜爱。

### 2.3.1 ReactElement

当需要用 React 创建虚拟 DOM 时，React 专门提供了一个方法 createElement()。注意该方法并非是原生 DOM 中的 createElement。

### 2.3.2 JSX

JSX 是什么呢？展开来说就是 JavaScript+XML，是一个看起来很像 XML 的 JavaScript 语法扩展。

## 2.4 create-react-app

### 2.4.1 安装 create-react-app

### 2.4.2 项目构建和启动

### 2.4.3 项目入口文件

### 2.4.4 React.StrictMode

StrictMode 是用来检查项目中是否有潜在风险的检测工具，类似于 JavaScript 中的严格模式。StrictMode 跟 Fragment 类似，不会渲染任何真实的 DOM。只是为后代元素触发额外的检查和警告。

## 2.5 定义 React 组件

## 2.6 组件间通信

### 2.6.1 props 使用

### 2.6.2 state 使用

### 2.6.3 组件间的通信

### 2.6.4 跨组件通信

## 2.7 组件的生命周期

## 2.8 ref

## 2.9 key

在 React 中，列表输出元素时，如果没有添加 key 属性，在开发环境中都会报出一个警告，要求加上 key 属性。key 属性到底有什么用呢？

前文中有过介绍组件重新渲染时，会拿原先的虚拟 DOM 和新的虚拟 DOM 进行对比，找出不一样的地方进行重新渲染。key 的作用就是给这组元素分别加上一个唯一的标识，组件更新之后根据这个标识进行对比。具体规则就是在旧的虚拟 DOM 中找到 key 为 1 的元素，和新的虚拟 DOM 中 key 为 1 的元素进行差异对比。所以要注意两个原则。

1）同一元素更新前后要保持 key 统一，也就是说元素 A 更新前 key 为 1，更新后 key 也要为 1。  
2）一组元素中 key 值不能重复。根据这两个原则，key 该怎么取值也就很清晰了。

## 2.10 添加事件

## 2.11 表单

## 2.12 其他特性

## 2.13 React Hooks

`React Hooks 是 React 16.7 内测新增、React 16.8 正式新增的一个新特性`。Hooks 帮助 React 解决了很多烦琐的问题。

### 2.13.1 常用 Hooks

Hooks 的本质是一类特殊的函数，在 React 中除了可以自定义 Hook 之外，还提供了很多内置 Hook。

1. useState
2. useRef
3. useEffect

### 2.13.2 Hooks 使用规则

### 2.13.3 自定义 Hook

## 2.14 小结

本章节深入讲解了 React 的概念以及相关 API 的具体使用。从最近几年来看，React 的发展还是比较快的，将来一定会有更多的特性诞生，但 React 专注于视图层的基本思路从未改变，希望读者可以把 React 真正使用到项目中去。另外学习从来就不是一蹴而就的，代码的学习更是这样，希望读者们在阅读的过程中可以打开计算机实操一下 React，在后文中也给读者准备了综合性的 React 项目。
