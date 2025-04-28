# 第 3 章　 Vue.js 3 的设计思路

## 3.1　声明式地描述 UI

使用 JavaScript 对象来描述 UI 的方式，其实就是所谓的虚拟DOM

## 3.2　初识渲染器

渲染器的作用就是把虚拟 DOM 渲染为真实 DOM，如图 3-1 所示。

<img src="https://font-end-1305214533.cos.ap-guangzhou.myqcloud.com/wxread%2Fimage00496.jpeg" width="800"/>

渲染器的精髓在于后续的更新，它会通过 Diff 算法找出变更点，并且只会更新需要更新的内容。

## 3.3　组件的本质

## 3.4　模板的工作原理

## 3.5　Vue.js 是各个模块组成的有机整体
