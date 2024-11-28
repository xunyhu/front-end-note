# 第 1 章 为什么要使用 TypeScript

本章主要介绍如何开始使用 TypeScript，以及为什么使用 TypeScript。

## 1.1 开始使用 TypeScript

TypeScript 代码会被编译成 JavaScript 代码，JavaScript 代码才是实际被执行的代码。在开始之前，你需要准备好以下工具。

● `TypeScript 编译器`。它是 OSS（Open Source Software，开源软件）​，在源代码和 npm（Node.js 包管理工具）上可以找到。

● `TypeScript 编辑器`。如果愿意，你可以使用 Notepad，但是我更推荐使用 Visual Studio Code（以下简称 VS Code）和我所写的扩展工具。当然还有其他许多 `IDE（Integrated Development Environment，集成开发环境）`也支持 TypeScript。

1. TypeScript 版本

   在安装 TypeScript 之前，需要先安装 npm（具体见第 10 章）​。然后可以使用命令行来安装 TypeScript，如下所示。

   `npm install typescript@next`

   现在，局部安装的 TypeScript 将是最新版本，而且各种 IDE 也支持它。例如，你可以让 VS Code 通过创建.vscode/settings.json 来使用这个版本，如下所示。

   ```json
   {
     "typescript.tsdk": "./node_modules/typescript/lib"
   }
   ```

2. 获取源代码

   此书的源代码可以在 Basarat 的 GitHub 个人主页上找到，地址详见参考资料[1]​，大多数代码示例都可以直接复制到 VS Code 中运行。

## 1.2 选择 TypeScript 的理由

微软推出 TypeScript 主要是为了实现两个目标。

● 为 JavaScript 提供可选的类型系统。

● 兼容当前及未来的 JavaScript 的特性。

1. **TypeScript 的类型系统**

   读者可能会问，为什么要给 JavaScript 加上类型？类型系统能够提高代码的质量和可维护性。大型团队（如 Google、Microsoft、Facebook 等）经过不断实践后得出一些结论，以下两点尤其值得注意。

   ● 类型有利于代码的重构，`它有利于编译器在编译时而不是运行时捕获错误`。

   ● 类型是出色的文档形式之一，函数签名是一个定理，而函数体是具体的实现。

2. 支持未来的 JavaScript 所具有的功能

   TypeScript 为当前的 JavaScript 引擎（只支持 ES5，ES5 全称为 ECMAScript 5.0）提供了许多计划在 ES6 中使用的功能。TypeScript 团队正在积极添加这些功能，这些功能会随着时间的推移而越来越多。

## 1.3 总结

本章讨论了 TypeScript 的设计目的及目标。探讨了这些之后，读者就可以深入了解 TypeScript 的实现细节了。
