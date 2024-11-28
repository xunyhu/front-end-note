# 第 1 章　走进 JavaScript 世界

## 1.1 JavaScript 是什么

## 1.2 JavaScript 的历史

1995 年，Netscape 公司雇佣程序员布莱登·艾奇，经过十天的时间就设计出了 LiveScript 1.0，后来将其改名为 JavaScript，并对外宣称 JavaScript 是 Java 的补充。

1996 年 11 月，Netscape 公司决定将 JavaScript 提交给 `Ecma 国际`（见图 1-2）​，希望 JavaScript 能够成为国际标准，以此抵抗微软公司。

1997 年 7 月，`Ecma 国际发布 262 号标准文件`(ECMA-262)的第一版，规定了浏览器脚本语言的标准，并将这种语言称为 ECMAScript，这就是 `ECMAScript 1.0`。

2015 年 6 月 17 日，ECMAScript 6 发布正式版本，即 ECMAScript 2015，通常`简称为“ES6”或“ES 2015”`​。

在此之后，`ECMAScript 规范每年发布一次，语言的版本也以发布的年份标识`，如 ES 2016、ES 2017、ES 2018、ES 2019、ES 2020 和 ES 2021 等。

## 1.3 JavaScript 与 Java 无关

## 1.4 JavaScript 的应用场景

## 1.5 JavaScript 的不同实现

### 1.5.1 ECMAScript

`ECMAScript 是 JavaScript 的正式名称。ECMAScript 标准规定了这门编程语言的标准和规范。`

**宿主环境：**

宿主环境就是运行 JavaScript 的平台，负责对 JavaScript 进行解析编译，以实现代码的运行。

1）`浏览器`是 JavaScript 最早的宿主环境，也是目前较常见的运行环境。运行在浏览器上的 JavaScript 可以调用浏览器提供的 API。

2）在 2010 年诞生的 `Node.js` 成为 JavaScript 的另一个宿主环境。运行在 Node.js 上的 JavaScript 也可以调用 Node.js 提供的 API。

### 1.5.2 BOM

BOM（Browser Object Model，浏览器对象模型）是浏览器为 JavaScript 提供的一系列 API，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过 BOM 开发人员可以进行浏览器定位和导航、获取浏览器和屏幕信息、操作窗口的历史记录、读取地理定位、进行本地存储及 Cookie 操作等。

### 1.5.3 DOM

DOM（Document Object Model，文档对象模型）是 HTML 文档为 JavaScript 提供的一系列 API。当创建好一个页面，并将其加载到浏览器时，DOM 就悄然而生，它会把网页文档转换为文档对象。通过 DOM 我们可以获取页面中的元素，设置元素的属性和样式，也可以创建、插入或删除节点，页面中的各种特效都需要通过 DOM 来实现。

### 1.5.4 Node.js

`Node.js 由 Ryan Dahl 于 2009 年开发，是一个基于 Chrome V8 引擎的 JavaScript 运行环境。`Node.js 使用了一个事件驱动、非阻塞式 I/O 模型，是使 JavaScript 可以运行在服务端的开发平台。有了 Node.js，JavaScript 就不仅仅是一门前端的编程语言，它也可以是后端的编程语言。

相较于运行在浏览器上的编程语言 JavaScript，二者的语法标准规范大体相同。不同的是，Node.js 提供不同于浏览器的 API，主要提供文件操作、网络操作、进程和线程操作等相关的 API。Node.js 中既没有 BOM，也没有 DOM。

## 1.6 JavaScript 的重要版本

- • ECMAScript 3.0，发布于 1999 年。`ECMAScript 3.0 版本成为 JavaScript 的通行标准`，并得到广泛支持，也是目前我们所学习的 JavaScript 的基础。
- • ECMAScript 5.0，发布于 2009 年。
- • ECMAScript 6.0，发布于 2015 年，因此也被称为 ECMAScript 2015。ECMAScript 6.0 是具有里程碑意义的版本，新增了大量的特性和语法。

![语法](https://read-1305214533.cos.ap-guangzhou.myqcloud.com/45235_20_1.jpg)

ECMAScript 2016 到 ECMAScript 2021 各版本新增的语法如下表所示。

<table>
    <tr>
        <th colspan="2">ECMAScript 2016 到 ECMAScript 2021 </th>
    </tr>
    <tr>
        <td>ECMAScript 版本</td>
        <td>新增语法</td>
    </tr>
    <tr>
        <td rowspan="2">ECMAScript 2016</td>
        <td>Array.prototype.includes()</td>
    </tr>
    <tr>
        <td>指数操作符</td>
    </tr>
    <tr>
        <td rowspan="8">ECMAScript 2017</td>
        <td>async/await</td>
    </tr>
    <tr>
        <td>Object.values()</td>
    </tr>
    <tr>
        <td>Object.entries()</td>
    </tr>
    <tr>
        <td>String padding</td>
    </tr>
    <tr>
        <td>函数参数列表结尾允许有逗号</td>
    </tr>
    <tr>
        <td>Object.getOwnPropertyDescriptors()</td>
    </tr>
    <tr>
        <td>SharedArrayBuffer对象</td>
    </tr>
    <tr>
        <td>Atomics对象</td>
    </tr>
    <tr>
        <td rowspan="8">ECMAScript 2018</td>
        <td>异步迭代</td>
    </tr>
    <tr>
        <td>Promise.finally()</td>
    </tr>
    <tr>
        <td>Rest/Spread属性</td>
    </tr>
    <tr>
        <td>正则表达式命名捕获组</td>
    </tr>
    <tr>
        <td>正则表达式反向断言</td>
    </tr>
    <tr>
        <td>正则表达式dotAll模式</td>
    </tr>
    <tr>
        <td>正则表达式Unicode转义</td>
    </tr>
    <tr>
        <td>非转义序列的模板字符串</td>
    </tr>
    <tr>
        <td rowspan="10">ECMAScript 2019</td>
        <td>行分隔符(U+2028)和段分隔符(U+2029)允许出现在字符串文字中，与JSON匹配</td>
    </tr>
    <tr>
        <td>JSON.stringify</td>
    </tr>
    <tr>
        <td>Array.prototype.flatMap()</td>
    </tr>
    <tr>
        <td>Array.prootype.flat()</td>
    </tr>
    <tr>
        <td>String的trimStart()方法和trimEnd()方法</td>
    </tr>
    <tr>
        <td>Object.fromEntries()</td>
    </tr>
    <tr>
        <td>Symbol.prototype.description</td>
    </tr>
    <tr>
        <td>String.prototype.matchAll</td>
    </tr>
    <tr>
        <td>Function.prototype.toString()</td>
    </tr>
    <tr>
        <td>修改catch绑定</td>
    </tr>
    <tr>
        <td rowspan="7">ECMAScript 2020</td>
        <td>Promise.allSettled</td>
    </tr>
    <tr>
        <td>可选链(Optional Chaining)</td>
    </tr>
    <tr>
        <td>空值合并运算符(Nullish Coalescing Operator)</td>
    </tr>
    <tr>
        <td>dynamic-import</td>
    </tr>
    <tr>
        <td>globalThis</td>
    </tr>
    <tr>
        <td>String.prototype.matchAll</td>
    </tr>
    <tr>
        <td>新的基本数据类型BigInt</td>
    </tr>
    <tr>
        <td rowspan="5">ECMAScript 2021</td>
        <td>String.prototype.replaceAll</td>
    </tr>
    <tr>
        <td>Promise.any()</td>
    </tr>
    <tr>
        <td>新增逻辑赋值操作符：??=、&&=、 |=</td>
    </tr>
    <tr>
        <td>WeakRefs</td>
    </tr>
    <tr>
        <td>下画线(_)分隔符</td>
    </tr>
</table>

## 1.7 编写第一行 JavaScript 代码

### 1.7.1 编程工具

使用任何一个文本编辑器都可以开发 JavaScript 程序，最简单的文本编辑器就是 Windows 系统自带的记事本，它可以写 JavaScript 程序，但是并不好用。为了开发方便，我们使用 IDE（Integrated Development Environment，集成开发环境）开发 JavaScript。

## 1.8 严格模式

ECMAScript 5 引入严格模式(Strict Mode)的概念，这是一种特殊的 JavaScript 解析和执行模型，通过抛出错误对正常的 JavaScript 中不规范的写法进行限制，使代码脱离“马虎模式、稀松模式、懒散模式”​。

## 1.9 本章小结

本章作为 JavaScript 的入门和综述，主要介绍了 JavaScript 的缘起和应用，引出了 JavaScript 是一种解释型的、动态类型的、弱类型的、面向对象的脚本语言。而且介绍了 JavaScript 的编程工具、编写位置、注释等知识点，为正式书写 JavaScript 代码做了铺垫。
