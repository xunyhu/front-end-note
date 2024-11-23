# Function

JavaScript 函数

概要

```js
function functionname(argument_name_list)//函数定义语句
{
    body
}
function(argument_name_list){body}//匿名函数直接量
functionname(argument_value_list)//函数调用
```

构造函数

```js
  new Function(argument_names...,body)
```

## 方法

1. Function.apply()

   将函数作为一个对象的方法调用。

   function.apply(thisobj,args)

   apply()将指定的函数 function 作为对象 thisobj 的方法来调用，并传入在 args 数组中包含的参数。它返回的是调用 function 的返回值。在函数体内，关键字 this 指代 thisobj 对象。args 参数必须是数组或 Arguments 对象。如果想单独指定传递给函数的参数，而不是通过数组元素来指定参数，可以使用 Function.call()方法。

   ```js
   //将默认的Object.toString()应用在一个对象上，
   //以便覆盖该对象上的toString()方法。注意没传参数
   Object.prototype.toString.apply(o); //用apply()调用Math.max()方法来查找数组中的最大元素
   //注意在这种情况下，第一个参数无所谓
   var data = [1, 2, 3, 4, 5, 6, 7, 8];
   Max.max.apply(null, data);
   ```

2. Function.bind()

   返回一个作为方法调用的函数。返回一个新函数。该函数会当做 o 的方法来调用，并向它传入 args 参数。

   function.bind(o) function.bind(o,args...)

   bind()方法返回一个新函数，该函数会当做对象 o 的方法来调用。传递给该函数的参数由两部分组成，一部分是传递给 bind()的 args 数组指定的参数，剩下的是传给这个新函数的所有值。

   ```js
   //假设f是一个函数
   var g = f.bind(o, 1, 2);
   //这样，g就一个新函数了。调用g(3)等价于：
   f.call(o, 1, 2, 3);
   ```

3. Function.call()

   将函数作为对象的方法调用

   function.call(thisobj,args...)

   call()将指定的函数 function 作为对象 thisobj 的方法来调用，并传入参数列表中 thisobj 之后的参数。返回的是调用 function 的返回值。在函数体内，关键字 this 指代 thisobj 对象，如果 thisobj 为 null，则使用全局对象。如果想用数组来指定传递给函数的参数，请使用 Function.apply()方法。

   ```js
   //将默认的Object.toString()应用在一个对象上
   //以便覆盖该对象上的toString()方法。注意没传参数
   Object.prototype.toString().call(o);
   ```
