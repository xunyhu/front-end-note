# DOM / BOM

## DOM操作

### 概念定义

HTML 文档节点的增删改查

### 原理解析

节点操作可能触发重排/重绘

### 用途/场景

页面动态更新、事件处理

### 示例代码：

```js
const div = document.createElement("div");
document.body.appendChild(div);
div.addEventListener("click", () => console.log("clicked"));
```

“操作 DOM 会触发重排重绘，影响性能，可用文档碎片或虚拟 DOM 优化。”

## BOM

### 概念定义

浏览器对象模型，包括 window、location、navigator

### 原理解析

BOM 提供浏览器级 API，不改变 HTML 结构

### 用途/场景

浏览器信息获取、页面跳转、定时器

### 示例代码：

```
console.log(window.location.href);
```

“BOM 提供浏览器环境 API，DOM 是文档结构，BOM 是浏览器对象。”
