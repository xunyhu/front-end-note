# 第 1 章 JavaScript 简介

JavaScript 是面向 Web 的编程语言。绝大多数现代网站都使用了 JavaScript，并且所有的现代 Web 浏览器—基于桌面系统、游戏机、平板电脑和智能手机的浏览器—均包含了 JavaScript 解释器。这使得 JavaScript 能够称得上史上使用最广泛的编程语言。JavaScript 也是前端开发工程师必须掌握的三种技能之一：描述网页内容的 HTML、描述网页样式的 CSS 以及描述网页行为的 JavaScript。本书能帮助你掌握 JavaScript 这门语言。

JavaScript 的语法源自 Java，它的一等函数(first-class function)来自于 Scheme，它的基于原型(prototype-based)的继承来自于 Self。但使用本书学习 JavaScript 不必去了解那些(Java/Scheme/Self)语言或熟悉那些术语。

"JavaScript"这个名字经常被误解。除了语法看起来和 Java 类似之外，JavaScript 和 Java 是完全不同的两种编程语言。JavaScript 早已超出了其“脚本语言”(scripting-language)本身的范畴，而成为一种集健壮性、高效性和通用性为一身的编程语言。

**JavaScript：名字和版本**

JavaScript 是由 Web 发展初期的网景(Netscape)公司创建，"JavaScript"是 Sun Microsystem 公司（现在的 Oracle）的注册商标，用来特指网景（现在的 Mozilla）对这门语言的实现。网景将这门语言作为标准提交给了 ECMA—欧洲计算机制造协会—由于商标上的冲突，这门语言的标准版本改了一个丑陋的名字"ECMAScript"。同样由于商标的冲突，微软对这门语言的实现版本取了一个广为人知的名字"Jscript"。实际上，几乎所有人都将这门语言叫做"JavaScript"。本书也仅仅使用"ECMAScript"来指代语言标准。

在最近 10 年间，所有的 Web 浏览器都实现了第 3 版 ECMAScript 标准，我们也已经不必再去考虑版本号了：语言标准已经很稳定了，并且被几乎所有浏览器完整地实现了。

当我们提到这门语言本身时，通常所指的语言版本是 ECMAScript 3 和 ECMAScript 5（ECMAScript 4 已经开发了数年，但由于太过庞大，从未发布过正式版本）​。有时会看到 JavaScript 的版本号（比如 JavaScript 1.5 或 JavaScript 1.8）​。

最后，`JavaScript 解释器或者“引擎”(engine)也有版本号`，比如，Google 将它的 JavaScript 解释器叫做 V8，在撰写本书时 V8 引擎最新版本是 3.0。

## 1.1 JavaScript 语言核心

本节是 JavaScript 语言的一个快速概览，也是本书第一部分的快速概览。在本章之后，我们将着重关注 JavaScript 的基础知识:

- 第 2 章讲解 JavaScript 注释、分号和 Unicode 字符集
- 第 3 章会更加有意思，主要讲解 JavaScript 变量和赋值
- 第 4 章介绍表达式
- 第 6 章介绍对象
- 第 7 章介绍数组
- 第 8 章会正式详细地讲解函数
- 第 9 章将详细讲解 JavaScript 中的面向对象编程，这一章有大量的示例代码，是本书中最长的一章。第 9 章是`第一部分的精华`所在
- 第 10 章主要讲解了正则表达式的语法
- 第 11 章介绍 JavaScript 语言核心的子集和超集
- 第 12 章介绍两种在 Web 浏览器之外的两种 JavaScirpt 运行环境。

## 1.2 客户端 JavaScript

JavaScript 语言核心部分的内容中的知识点交叉引用比较多，且知识点的层次感并不分明。而在客户端 JavaScript 部分的内容编排方式有了较大改变。依照本书给定的知识点顺序进行学习，完全可以学会如何在 Web 浏览器中使用 JavaScript。

- 第 13 章是第二部分的第一章，该章介绍如何让 JavaScript 在 Web 浏览器中运行起来。
- 第 14 章讲解 Web 浏览器端脚本技术，并涵盖客户端 JavaScript 中的一些重要全局函数
- 第 15 章的内容更加务实—通过脚本来操纵 HTML 文档内容。
- 第 16 章讲述如何使用 JavaScript 来进行 CSS 样式操作，CSS 样式定义了内容的展示方式。
- 第 17 章详细描述如何`定义、注册事件处理程序`，以及`在事件发生时浏览器是如何调用`它们的。

### 示例：一个 JavaScript 贷款计算器

见 code/1.1.html
