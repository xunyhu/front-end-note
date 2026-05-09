React 路由的核心本质是：**URL 变化 → 匹配路由配置 → 渲染对应组件**。它主要依赖浏览器的 History API 和 React 的组件渲染机制来实现。

---

## 一、核心原理

React Router 内部主要做了三件事：

1. **监听 URL 变化**
   - 基于 `history.pushState`、`replaceState` 以及 `popstate` 事件
   - 当 URL 发生变化时触发更新

2. **路由匹配**
   - 根据当前 URL，在路由表中进行匹配（路径匹配、动态参数匹配等）
   - 找到对应的组件

3. **组件渲染**
   - 将匹配到的组件渲染到页面中，实现“页面切换”的效果

## 二、两种路由模式

1. BrowserRouter（常用）
   - 基于 HTML5 History API
   - URL 看起来更正常（如 `/dashboard`）
   - 需要服务端支持（解决刷新 404 问题）

2. HashRouter
   - 基于 URL hash（如 `/#/dashboard`）
   - 不依赖服务端
   - 适合部署简单的场景
