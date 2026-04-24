## 生命周期

Vue2 使用选项类型 API（Options API），Vue3 是合成型 API（Composition API）。
在 Vue2 中，我们可以在组件中调用组件的生命周期钩子函数，现在 Vue3 的合成型 API 里面的 setup() 方法基本上包含了所有东西，生命周期的钩子就是其中之一。

但是在 Vue3 中，生命周期钩子函数不是全局可以调用的了，需要另外从 Vue 中引入，生命周期的挂载钩子叫 onMounted，引入后我们就可以在 setup() 方法里面使用 onMounted 挂载的钩子了。

## diff 算法

Vue2 和 Vue3 在 diff 算法方面的差异主要体现在：在处理完可复用节点后对剩余节点的处理方式。

Vue2 是通过创建一个存放 key 和对应虚拟 DOM 节点的映射列表 {key,oldVnode}，然后遍历新节点列表的剩余节点，根据新的虚拟 DOM 节点的 key 查看它是否可以在映射表中找到可复用的节点的方式来处理剩余节点，并把这个可复用节点移动到正确的位置。

 Vue3 则是创建了一个映射关系数组，这个映射关系数组存放了新节点数组中的剩余节点在旧节点数组上的索引的映射关系。建立完这个数组时随即也就知道了哪些节点是可复用的，然后通过这个数组计算最长递增子序列，这个序列中的节点位置不动，然后将新节点数组中的剩余节点移动到正确的位置。

## 数据响应式原理

Vue2 的数据响应式原理是通过 Object.defineProperty() 对数据进⾏劫持并结合发布订阅模式的⽅式来实现的。

Vue3 中使⽤了 ES6 的 ProxyAPI 对数据代理，通过 reactive() 函数给每⼀个对象都包⼀层 Proxy，通过 Proxy 监听属性的变化，从⽽实现对数据的监控。

## 组件通信

Vue2 中父组件向子组件传值使用 props，子组件向父组件传值使用 emit。兄弟组件传值可以先传到父组件，再传给子组件。爷孙组件传值使用 provide/inject，也可以使用 Vuex 状态管理器进行组件之间的通信。

在 Vue3 中，由于 Vue3 将 Vue2 的选项式 API 变为了组合 API, 所以使用起来会有一点差别，但是差别不大。

**父传子：**

1. 父组件使用 ref 或 reactive 将数据变为响应数据
2. 子组件使用 props 接收
```
app.component("Parent", {
  setup() {
    //使用 ref 将 parentData 变为响应数据
    const parentData = Vue.ref("parent data");
    return {
      parentData,
    };
  },
  template: 
`<div>
    <div>父组件</div> 
        //使用 v-model 实现 parentData 双向绑定，改变 parentData 的值时会更新到子组件
        <input type="text" v-model="parentData" /> 
        <Child :parentData="parentData" />
</div>`,
});
app.component("Child", {
  props: ["parentData"],
  setup() {},
  template:
 `<div>
     <div>子组件</div>{{ parentData }}
 </div>`,
});
```

**子传父：**

1. 父组件中定义方法接受子组件传过来的数据
2. 给子组件绑定自定义事件
3. 触发子组件的自定义事件, 执行 context.emit 方法，将值传递给父组件

```
app.component("Parent", {
  setup() {
    const childData = Vue.ref("");
    // 定义方法接受子组件传来的数据
    const receiveData = (e) => {
      childData.value = e;
    };
    return {
      receiveData,
      childData,
    };
  },
  template: 
`<div>
    <div>父组件</div>
    <p>子组件传来的数据: {{ childData }}</p>
    <Child @inputText="receiveData" />
</div>`,
});
app.component("Child", {
  props: ["parentData"],
  setup() {
    const data = Vue.ref("child data");
    //向父组件传值
    const toParent = () => {
      context.emit("inputText", data.value);
    };
    return {
      data,
      toParent,
    };
  },
  template: 
`<div>
    <div>子组件</div>
    <input type="text" @input="toParent" v-model="data" />
</div>`,
});
```

爷孙组件传值和 Vue2 中一样也可以使用 provide/inject，但也可以使用 ref/reactive 将数据变为响应式的。