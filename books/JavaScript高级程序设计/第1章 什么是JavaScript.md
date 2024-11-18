# 第 1 章 什么是 JavaScript

## 1.1 简短的历史回顾

1995 年，网景公司一位名叫 Brendan Eich 的工程师，开始为即将发布的 Netscape Navigator 2 开发一个叫 Mocha（后来改名为 LiveScript）的脚本语言。当时的计划是在客户端和服务器端都使用它，它在服务器端叫 LiveWire。

为了赶上发布时间，网景与 Sun 公司结为开发联盟，共同完成 LiveScript 的开发。就在 Netscape Navigator 2 正式发布前，网景把 LiveScript 改名为 JavaScript，以便搭上媒体当时热烈炒作 Java 的顺风车。

## 1.2 JavaScript 实现

虽然 JavaScript 和 ECMAScript 基本上是同义词，但 JavaScript 远远不限于 ECMA-262 所定义的那样。没错，**完整的 JavaScript 实现**包含以下`三个部分`

1. 核心（ECMAScript）
2. 文档对象模型（DOM）
3. 浏览器对象模型（BOM）

### 1.2.1 [ECMAScript](https://zh.wikipedia.org/zh-cn/ECMAScript)

**ECMAScript**，即 `ECMA-262` 定义的语言，并不局限于 Web 浏览器。事实上，这门语言没有输入和输出之类的方法。[ECMA-262](https://ecma-international.org/publications-and-standards/standards/ecma-262/) 将这门语言作为一个基准来定义，以便在它之上再构建更稳健的脚本语言。Web `浏览器`只是 ECMAScript 实现可能存在的一种宿主环境（host environment）​。宿主环境提供 ECMAScript 的基准实现和与环境自身交互必需的扩展。扩展（比如 DOM）使用 ECMAScript 核心类型和语法，提供特定于环境的额外功能。其他宿主环境还有服务器端 JavaScript 平台 `Node.js` 和即将被淘汰的 `Adobe Flash`。

1. ECMAScript 版本

   ECMAScript 不同的版本以“edition”表示（也就是描述特定实现的 ECMA-262 的版本）​。ECMA-262 最近的版本是第 10 版，发布于 2019 年 6 月。ECMA-262 的第 1 版本质上跟网景的 JavaScript 1.1 相同，只不过删除了所有浏览器特定的代码，外加少量细微的修改。

2. ECMAScript 符合性是什么意思
3. 浏览器对 ECMAScript 的支持

### 1.2.2 DOM

`文档对象模型（DOM, Document Object Model）是一个应用编程接口（API）​，用于在 HTML 中使用扩展的 XML。DOM 将整个页面抽象为一组分层节点。`HTML 或 XML 页面的每个组成部分都是一种节点，包含不同的数据。比如下面的 HTML 页面：

```xml
    <html>
        <head>
            <title>Sample Page</title>
        </head>
        <body>
            <p> Hello World! </p>
        </body>
    </html>
```

DOM 通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用 DOM API，可以轻松地删除、添加、替换、修改节点。

### 1.2.3 BOM

IE3 和 Netscape Navigator 3 提供了`浏览器对象模型（BOM）API，用于支持访问和操作浏览器的窗口`。使用 BOM，开发者可以操控浏览器显示页面之外的部分。`而 BOM 真正独一无二的地方，当然也是问题最多的地方，就是它是唯一一个没有相关标准的 JavaScript 实现。HTML5 改变了这个局面，这个版本的 HTML 以正式规范的形式涵盖了尽可能多的 BOM 特性`。由于 HTML5 的出现，之前很多与 BOM 有关的问题都迎刃而解了。

## 1.3 JavaScript 版本

## 1.4 小结

JavaScript 的这三个部分得到了五大 Web 浏览器（IE、Firefox、Chrome、Safari 和 Opera）不同程度的支持。所有浏览器基本上对 ES5（ECMAScript 5）提供了完善的支持，而对 ES6（ECMAScript 6）和 ES7（ECMAScript 7）的支持度也在不断提升。这些浏览器对 DOM 的支持各不相同，但对 Level 3 的支持日益趋于规范。HTML5 中收录的 BOM 会因浏览器而异，不过开发者仍然可以假定存在很大一部分公共特性。
