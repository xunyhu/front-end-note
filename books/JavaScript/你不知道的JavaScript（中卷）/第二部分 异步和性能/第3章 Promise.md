# 第 3 章 Promise

在第 2 章里，我们确定了通过回调表达程序异步和管理并发的两个主要缺陷：缺乏顺序性和可信任性。既然已经对问题有了充分的理解，那么现在是时候把注意力转向可以解决这些问题的模式了。

回忆一下，我们用回调函数来封装程序中的 continuation，然后把回调交给第三方（甚至可能是外部代码）​，接着期待其能够调用回调，实现正确的功能。

通过这种形式，我们要表达的意思是：​“这是将来要做的事情，要在当前的步骤完成之后发生。​”

但是，如果我们能够把控制反转再反转回来，会怎样呢？如果我们不把自己程序的 continuation 传给第三方，而是希望第三方给我们提供了解其任务何时结束的能力，然后由我们自己的代码来决定下一步做什么，那将会怎样呢？`这种范式就称为 Promise。`

## 3.1 什么是 Promise

但是，事实证明，只了解 API 会丢失很多抽象的细节。Promise 属于这样一类工具：通过某人使用它的方式，很容易分辨他是真正理解了这门技术，还是仅仅学习和使用 API 而已。

### 3.1.1 未来值

1. 现在值与将来值

   ```js
    function add(getX, getY, cb) {
        var x, y;
        getX( function(xVal){
            x = xVal;
            // 两个都准备好了？
            if (y ! = undefined) {
                cb( x + y );        // 发送和
            }
        } );
        getY( function(yVal){
            y = yVal;
            // 两个都准备好了？
            if (x ! = undefined) {
                cb( x + y );        // 发送和
            }
        } );
    }

    // fetchX() 和fetchY()是同步或者异步函数
    add( fetchX, fetchY, function(sum){
        console.log( sum ); // 是不是很容易？
    } );
   ```

2. Promise 值

   ```js
   function add(xPromise, yPromise) {
     // Promise.all([ .. ])接受一个promise数组并返回一个新的promise，
     // 这个新promise等待数组中的所有promise完成
     return (
       Promise.all([xPromise, yPromise])

         // 这个promise决议之后，我们取得收到的X和Y值并加在一起
         .then(function (values) {
           // values是来自于之前决议的promise的消息数组
           return values[0] + values[1];
         })
     );
   }

   // fetchX()和fetchY()返回相应值的promise，可能已经就绪，
   // 也可能以后就绪
   add(fetchX(), fetchY())
     // 我们得到一个这两个数组的和的promise
     // 现在链式调用then(..)来等待返回promise的决议
     .then(function (sum) {
       console.log(sum); // 这更简单！
     });
   ```

## 3.9 小结
