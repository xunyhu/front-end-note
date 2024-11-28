# 第 2 章 JavaScript 常见语法

关于 JavaScript 和 TypeScript 的关系，下面将从三个方面进行简单介绍。

1. JavaScript 即 TypeScript

   在编译成 JavaScript 的语言中，存在着 TypeScript 的众多竞争对手。TypeScript 不同于它们，因为 JavaScript 就是 TypeScript，如下图所示。

   ![epub_29126294_14](https://read-1305214533.cos.ap-guangzhou.myqcloud.com/epub_29126294_14.jpg)

   可以说，TypeScript 只是带有文档的 JavaScript。

2. TypeScript 让 JavaScript 更美好

   实际上，TypeScript 只是 JavaScript 的一个编译器，与其他没有类型系统的编译器相比，TypeScript 在类型系统方面做得更好。

3. 学习 JavaScript 仍然是必要的

   注意：`TypeScript 是 JavaScript 的“超集”​，只是编译器或 IDE 实际可以使用的文档`。

## 2.1 相等

## 2.2 引用

除字面量外，JavaScript 中的任何对象（包括函数、数组、正则表达式等）都是一个引用。这意味着这些对象一旦发生变化，这种变化将会贯穿整个引用；并且在将它们赋值给一个新变量后，它们的引用也是相等的。

## 2.3 null 和 undefined

在 JavaScript 以及它的扩展 TypeScript 中，null 和 undefined 表示不同的意思。

● 变量没有初始化：undefined。

● 变量不可用：null。

## 2.4 this

在函数内对 this 关键字的访问实际上都是由函数的实际调用方式控制的。它通常被称为调用上下文。

## 2.5 闭包

`闭包是 JavaScript 最好的语法之一`。在 JavaScript 中，`闭包是指一个函数有权力访问定义在它外部作用域的任何变量`。

## 2.6 数字

1. 核心类型

   在 JavaScript 中，只有一个数字类型。它是一个`双精度的 64 位的 number`。下面我们将讨论它的局限性，以及一些推荐的解决方案。

## 2.7 truthy

![img](https://read-1305214533.cos.ap-guangzhou.myqcloud.com/epub_29126294_56.jpg)
