# 第12章 组合API

## 12.1 什么是组合API

组合API是Vue 3.0中新增的API，它将组件中常用的逻辑抽象出来，方便复用。它包含两个部分：`setup`和`reactive`。

## 12.2 setup()函数

setup()函数是一个新的组件选项，它是组件内部使用组合API的入口。setup()函数在组件实例创建之前、初始化Prop之后调用，而且setup()函数是在beforeCreate钩子函数之前调用。setup()函数可以返回一个对象或函数，对象的属性会合并到组件模板渲染的上下文中。

## 12.3 响应式API

1. reactive()方法

    reactive()方法用于将定义的JavaScript对象转换为响应式对象。

## 12.4 生命周期钩子函数

与基于选项的API相比，组合API中的生命周期钩子函数也发生了变化，将选项中的生命周期钩子函数改成了onXxx()函数的形式。需要注意的是，beforeCreate和created两个钩子函数被删除了，取而代之的是setup()函数。

<img src="https://font-end-1305214533.cos.ap-guangzhou.myqcloud.com/wxread%2FFigure-T212_61150.jpg" alt="Figure-T212_61150" width="800"/>

## 12.5 使用ref获取DOM元素

在Vue 3.0中，使用ref()方法除了可以对某个原始值创建响应式代理对象，还可以获取模板中的指定DOM元素。要获取指定DOM元素，首先需要为该元素添加一个ref属性，然后在setup()函数中声明一个名称与ref属性值相同的变量，并传入一个空值null，再通过“变量名.value”的形式就可以获取到该元素。
