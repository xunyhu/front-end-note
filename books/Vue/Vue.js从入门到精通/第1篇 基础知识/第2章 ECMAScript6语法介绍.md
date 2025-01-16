# 第 2 章 ECMAScript6 语法介绍

ECMAScript 6（简称 ES6）是于 2015 年 6 月正式发布的 JavaScript 语言的标准，正式名称为 ECMAScript 2015(ES2015)。

本章知识架构及重难点如下。

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

## 2.10 模块
