# 第 2 章 ECMAScript6 语法介绍

ECMAScript 6（简称 ES6）是于 2015 年 6 月正式发布的 JavaScript 语言的标准，正式名称为 ECMAScript 2015(ES2015)。

本章知识架构及重难点如下。

<image src="https://read-1305214533.cos.ap-guangzhou.myqcloud.com/Figure-P27_2374.jpg" width="800"/>

## 2.1 块级声明

1. let 声明

   在代码块中分别使用 var 和 let 声明两个变量，然后在代码块之外调用这两个变量，代码如下：

   ```js
   {
     var a = 10;
     let b = 20;
   }
   console.log(a); //10
   console.log(b); //报错：b没有定义
   ```

2. const 声明

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

1. 多行字符串

   在 ES6 中，使用模板字面量的语法就可以表示多行字符串。模板字面量的基础语法是使用反引号“`”替换字符串的单引号或双引号。示例代码如下：

   ```js
   let str = `月落乌啼霜满天，
       江枫渔火对愁眠。
       姑苏城外寒山寺，
       夜半钟声到客船。`;
   ```

2. 字符串占位符

   占位符由一个“$”和一对大括号“{}”组成，大括号之间可以包含变量或表达式。

   ```js
   let name = "Tony";
   let sex = "男";
   let age = 25;
   let str = `姓名：${name} 性别：${sex} 年龄：${age}`;
   document.write(str);
   ```

## 2.3 默认参数和 rest 参数

1. 默认参数

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

2. rest 参数

   在 JavaScript 中，无论在定义函数时设置了多少个形参，在调用函数时都可以传入任意数量的实参，在函数内部可以使用 arguments 对象获取传入的实参。

   在 ES6 中引入了 rest 参数，在函数的形参前添加 3 个点，就表示这是一个 rest 参数。

   普通参数和 rest 参数可以同时存在。如果既有普通参数也有 rest 参数，那么 rest 参数必须放到参数列表的最后面的位置。

## 2.4 解构赋值

1. 对象解构

   对象解构的语法格式是将对象中的属性名组成一个对象字面量，并放在赋值操作符的左边。

   ```js
   let person = {
     name: "tom",
   };
   let { name } = person;
   ```

2. 数组解构

   数组解构的语法格式是将变量名组成一个数组，并放在赋值操作符的左边。

   ```js
   let person = ["Tony", "kelly", "jerry"];
   let [a, b, c] = person;
   ```

## 2.5 展开运算符

展开运算符可以将一个数组展开，也可用于展开对象中的所有可遍历属性。展开运算符在语法上也是使用 3 个点。

```js
let arr = [1, 2, 3];
console.log([...arr]);

let arr2 = [4, 5, 6];
console.log([...arr, ...arr2]);

let arr = ["Tony", "Kelly", "Tom", "Jerry"];
let [name1, name2, ...name3] = arr; //展开运算符只能放在数组的最后。
console.log(name1); //Tony
console.log(name2); //Kelly
console.log(name3); //['Tom', 'Jerry']
```

展开运算符还可用于展开对象中的所有可遍历属性。

## 2.6 对象字面量语法扩展

1. 对象初始化的简写

   ES5

   ```js
   let name = "tony";
   var person = {
     name: name,
   };
   ```

   ES6

   ```js
   let name = "tony";
   var person = {
     name,
   };
   ```

2. 对象方法的简写

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

3. 动态属性名

   在 ES5 中，访问对象的属性可以使用“.”符号和“​[​]​”​。如果属性名是一个变量，则只能使用“​[​]​”访问对象的属性。

   在 ES6 中，通过在“​[​]​”中使用变量或表达式可以在对象字面量中使用动态的属性名。

## 2.7 箭头函数

1. 语法

   箭头函数中只有一个参数，函数体中只有一条语句，示例代码如下：

   ```js
   let count = (price) => price;
   /*
     相当于
     function count(price){
          return price;
     }
     */
   console.log(count(6.6)); //6.6
   ```

   箭头函数中的参数多于一个，需要使用小括号将参数包含起来，示例代码如下：

   ```js
   let count = (price, number) => `${price},${number}`;
   ```

   箭头函数中没有参数，需要使用一对空的小括号，示例代码如下：

   ```js
   let count = () => "商品名称：品牌相机";
   console.log(count()); //商品名称：品牌相机
   ```

   箭头函数的函数体中有多条语句，需要使用大括号将函数体包含起来，示例代码如下：

   ```js
   let count = (price, number) => {
     let total = price * number;
     return total;
   };
   console.log(count(6.6, 10)); //66
   ```

   箭头函数的返回值是一个对象字面量，需要使用小括号将对象字面量包含起来，示例代码如下：

   ```js
   let count = (price, number) => ({ price: price, number: number });
   console.log(count(6.6, 10)); //{price: 6.6, number: 10}
   ```

2. 箭头函数中的 this

   在箭头函数中并没有 this 绑定，如果箭头函数包含在非箭头函数中，那么箭头函数中的 this 指向的是最近的非箭头函数中的 this，否则，this 会被设置为全局对象。

## 2.8 Promise

在 ES6 中提供的 Promise 可以更好地解决异步编程问题。

Promise 构造函数只接收一个参数，该参数是一个执行器函数，在函数内包含需要异步执行的代码。执行器函数可以接收两个函数形式的参数，分别是 resolve()函数和 reject()函数。resolve()函数用于在异步操作执行成功时调用，reject()函数用于在异步操作执行失败时调用。

<image src="https://font-end-1305214533.cos.ap-guangzhou.myqcloud.com/wxread%2FFigure-P38_4124.jpg" width="800"/>

在 Promise 对象中有一个 then()方法，该方法可以接收两个函数形式的参数，第一个是 Promise 异步操作成功完成时调用的函数，第二个是 Promise 异步操作执行失败时调用的函数。

<image src="https://font-end-1305214533.cos.ap-guangzhou.myqcloud.com/wxread%2FFigure-P38_4125.jpg" width="800"/>

在 Promise 对象中还有一个 catch()方法，该方法用于在执行异步操作失败后进行处理，相当于在 then()方法中给出的异步操作执行失败时的代码。在通常情况下，then()方法和 catch()方法可以一起使用以处理异步操作的结果。

<image src="https://font-end-1305214533.cos.ap-guangzhou.myqcloud.com/wxread%2FFigure-P39_4275.jpg" width="800"/>

## 2.9 类

1. 创建类和实例

   ```js
   class 类名 {
     ... //类体
   }

   var 对象名 = new 类名();
   ```

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

```

```
