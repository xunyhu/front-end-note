# 第 2 章 this、call 和 apply

在 JavaScript 编程中，this 关键字总是让初学者感到迷惑，Function.prototype.call 和 Function.prototype.apply 这两个方法也有着广泛的运用。我们有必要在学习设计模式之前先理解这几个概念。

## 2.1 this

跟别的语言大相径庭的是，JavaScript 的 this 总是指向一个对象，而具体指向哪个对象是在运行时基于函数的执行环境动态绑定的，而非函数被声明时的环境

### 2.1.1 this 的指向

除去不常用的 with 和 eval 的情况，具体到实际应用中，this 的指向大致可以分为以下 4 种。

1. 作为对象的方法调用。
2. 作为普通函数调用。
3. 构造器调用。
4. Function.prototype.call 或 Function.prototype.apply 调用。

## 2.2 call 和 apply

ECAMScript 3 给 Function 的原型定义了两个方法，它们是 Function.prototype.call 和 Function.prototype.apply。在实际开发中，特别是在一些函数式风格的代码编写中，call 和 apply 方法尤为有用。在 JavaScript 版本的设计模式中，这两个方法的应用也非常广泛，能熟练运用这两个方法，是我们真正成为一名 JavaScript 程序员的重要一步。

### 2.2.1 call 和 apply 的区别

Function.prototype.call 和 Function.prototype.apply 都是非常常用的方法。它们的作用一模一样，`区别仅在于传入参数形式的不同`。

apply 接受两个参数，第一个参数指定了函数体内 this 对象的指向，第二个参数为一个带下标的集合，这个集合可以为数组，也可以为类数组，apply 方法把这个集合中的元素作为参数传递给被调用的函数：

```js
var func = function (a, b, c) {
  alert([a, b, c]); // 输出 [ 1, 2, 3 ]
};

func.apply(null, [1, 2, 3]);
```

call 传入的参数数量不固定，跟 apply 相同的是，第一个参数也是代表函数体内的 this 指向，从第二个参数开始往后，每个参数被依次传入函数

```js
var func = function (a, b, c) {
  alert([a, b, c]); // 输出 [ 1, 2, 3 ]
};

func.call(null, 1, 2, 3);
```

当使用 call 或者 apply 的时候，如果我们传入的第一个参数为 null，函数体内的 this 会指向默认的宿主对象，在浏览器中则是 window
