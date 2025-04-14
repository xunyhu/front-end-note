# 第 2 章 ECMAScript6 语法介绍

ECMAScript 6（简称 ES6）是于 2015 年 6 月正式发布的 JavaScript 语言的标准，正式名称为 ECMAScript 2015(ES2015)。

本章知识架构及重难点如下。

<image src="https://read-1305214533.cos.ap-guangzhou.myqcloud.com/Figure-P27_2374.jpg" width="800"/>

## 2.1 块级声明

### 2.1.1 let 声明

在代码块中分别使用 var 和 let 声明两个变量，然后在代码块之外调用这两个变量，代码如下：

```js
{
  var a = 10;
  let b = 20;
}
console.log(a); //10
console.log(b); //报错：b没有定义
```

### 2.1.2 const 声明

在 ES6 中提供了 const 关键字用于声明一个只读的常量。使用 const 定义常量后，常量的值就不能改变，而且在声明时必须对其进行初始化赋值。

如果将一个对象定义成一个常量，那么对象的引用不能修改，而对象的属性可以修改。示例代码如下：

```js
const user = {
  name: "Tom",
};
user.name = "Jerry";
document.write(user.name); //输出Jerry
```

如果不允许修改对象的属性，可以使用 Object.freeze()方法冻结对象，示例代码如下：

```js
const user = Object.freeze({
  name: "Tom",
});
user.name = "Jerry";
document.write(user.name); //输出Tom
```

## 2.2 模板字面量

ES6 中引入了模板字面量，主要通过多行字符串和字符串占位符对字符串进行增强操作。

### 2.2.1 多行字符串

在 ES6 中，使用模板字面量的语法就可以表示多行字符串。模板字面量的基础语法是使用反引号“`”替换字符串的单引号或双引号。示例代码如下：

```js
let str = `月落乌啼霜满天，
     江枫渔火对愁眠。
     姑苏城外寒山寺，
     夜半钟声到客船。`;
```

### 2.2.2 字符串占位符

占位符由一个“$”和一对大括号“{}”组成，大括号之间可以包含变量或表达式。

```js
let name = "Tony";
let sex = "男";
let age = 25;
let str = `姓名：${name} 性别：${sex} 年龄：${age}`;
document.write(str);
```

## 2.3 默认参数和 rest 参数

### 2.3.1 默认参数

ES5 添加默认参数

```js
function table(width, height, rows, cols) {
  width = width || 300;
  height = height || 200;
  rows = rows || 6;
  cols = cols || 3;
}
```

ES6

```js
function table(width = 300, height = 200, rows = 6, cols = 3) {
  //函数体
}
```

### 2.3.2 rest 参数

在 JavaScript 中，无论在定义函数时设置了多少个形参，在调用函数时都可以传入任意数量的实参，在函数内部可以使用 arguments 对象获取传入的实参。

## 2.4 解构赋值

### 2.4.1 对象解构

### 2.4.2 数组解构

## 2.5 展开运算符

## 2.6 对象字面量语法扩展

### 2.6.1 对象初始化的简写

### 2.6.2 对象方法的简写

ES5

```js
var cal = {
  product: function (a, b, c) {
    return a * b * c;
  },
};
console.log(cal.product(3, 6, 5)); //90
```

在 ES6 中，定义对象的方法可以省略冒号和 function 关键字。示例代码如下

```js
var cal = {
  product(a, b, c) {
    return a * b * c;
  },
};
console.log(cal.product(3, 6, 5)); //90
```

### 2.6.3 动态属性名

## 2.7 箭头函数

### 2.7.1 语法

### 2.7.2 箭头函数中的 this

## 2.8 Promise

## 2.9 类

1. 创建类和实例
2. 类的构造函数

   每个类中包含了一个特殊的方法 `constructor`，它是类的构造函数，其作用是对类进行初始化。通过 new 关键字生成对象实例后会自动调用该构造函数。如果没有显式定义，在类的内部会自动创建一个 constructor()构造函数。

3. 在类中添加方法

   类中的所有方法不需要写 function 关键字，而且多个方法之间不需要添加分隔符号。

4. 类的继承

   类的继承是指子类可以继承父类的一些属性和方法。要实现类的继承，就需要在创建类时使用 `extends` 关键字。  
   在定义的子类中需要使用 `super` 方法，该方法用于引用父类的构造函数。在子类的构造函数中通过 super()方法调用父类的构造函数，这样就可以访问父类的属性和方法。

   <image src="https://font-end-1305214533.cos.ap-guangzhou.myqcloud.com/wxread%2FFigure-P42_4765.jpg" width="800"/>

5. 静态成员

   在创建类的类体中，在成员前面添加 `static` 关键字就可以定义静态成员。静态成员只能通过类名进行调用。

## 2.10 模块

1. 模块概述

   将 JavaScript 程序拆分为可按需导入的单独模块的机制，这就是模块化的编程。模块化编程就是将一个复杂的程序根据一定的规范封装成一个或多个文件，并组合在一起。使用这种方式，可以将代码分解到多个文件中，每个文件都称为一个模块。一个模块通常是一个类或者多个函数组成的方法库。

   在 JavaScript 没有模块功能的时候，只能通过第三方规范（如 CommonJS 规范、AMD 规范）实现模块化。而在 ES6 中加入了模块规范，该规范成为浏览器和服务器通用的模块解决方案，比使用第三方规范更有效率。

   ECMAScript 在 2015 年开始支持模块标准，此后逐渐发展，现已得到了所有主流浏览器的支持。

2. ES6 中的模块

   ES6 为 JavaScript 提供了 export 和 import 关键字，用于导出和导入模块。

   1 导出模块

   在使用 export 语句进行导出时，可以使用 `as` 关键字对导出的标识符进行重命名。  
   如果只想导出模块中的一个函数或类，可以使用默认导出的形式，即 `export default` 语句。  
   使用 export 语句只能导出已经命名的变量、函数或类。而使用 export default 语句的默认导出则可以导出任意表达式，包括匿名函数。

   2 导入模块

   使用通配符 `*` 将每一个模块功能导入一个模块功能对象中。

   ```js
   import * as obj from "./module.js";
   ```

   如果导入默认导出的内容，可以使用 default 关键字并提供别名进行导入，也可以直接使用自定义的标识符作为默认导出的别名进行导入。

   ```js
   import {default as exam} from './module.js'; 或  import exam from './module.js';
   ```

   3 在网页中使用模块

   如果想在 HTML 文件中使用 ES6 模块，需要将 script 标签的 type 属性值设置为 `module`，用于声明该 script 标签所包含的代码作为模块在浏览器中执行。

   <image src="https://font-end-1305214533.cos.ap-guangzhou.myqcloud.com/wxread%2FFigure-P48_5599.jpg" width="800"/>
