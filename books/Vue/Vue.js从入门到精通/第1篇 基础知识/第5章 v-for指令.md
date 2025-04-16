# 第 5 章 v-for 指令

<img src="https://read-1305214533.cos.ap-guangzhou.myqcloud.com/Figure-P70_8306.jpg" alt="" width="800">

## 5.1 遍历数组

v-for指令将根据接收到的数组中的数据重复渲染DOM元素。该指令需要使用item in items形式的语法，其中，items为数据对象中的数组名称，item为数组元素的别名，通过别名可以获取当前数组遍历的每个元素。

## 5.2 遍历对象

<img src="https://font-end-1305214533.cos.ap-guangzhou.myqcloud.com/wxread%2FFigure-P80_10192.jpg" alt="" width="800">

## 5.3 遍历整数

v-for指令也可以遍历整数，接收的整数即为循环次数，根据循环次数将模板重复整数次。

使用v-for指令输出九九乘法表。代码如下：

```vue
<div v-for="n in 9">
    <span v-for="m in n">
        {{m}} * {{n}} = {{n * m}}
    </span>
</div>
```

## 5.4 key属性

使用v-for指令渲染的元素列表在更新时，如果数据项的顺序被改变，Vue不会移动DOM元素来匹配数据项的顺序，而是就地更新每个元素。为了使Vue能跟踪每个DOM元素，需要为每一个数据项提供一个唯一的key属性。
