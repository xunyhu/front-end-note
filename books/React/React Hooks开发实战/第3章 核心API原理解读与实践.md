# 第 3 章　核心 API 原理解读与实践

从本章开始我们正式进入对 React Hooks API 的学习，为了帮助大家更好地理解相关知识，所有内容都会配合实际案例进行讲解。下面我们先从 useState 讲起。

## 3.1 useState

useState 是 React 的内置函数，作用是让函数组件也可以维护自己的状态。这是一个管理状态的 API。简单理解就是，useState 是改变状态的开关，能够完成对状态的初始化、读取和更新。

### 3.1.1 上手使用 useState

状态一旦改变，React 就会重新渲染组件

### 3.1.2 浅谈 useState 异步

在 React Hooks 中，修改状态是通过 useState 返回的修改函数实现的。它的功能类似于 Class 组件中的 this.setState()。这两种方式都是异步的。可是 this.setState()是有回调函数的，如果你需要获取更新后最新的值，可以在回调函数中获取。但 useState 没有回调函数，那么我们如何获取最新的值呢？

为了让我们能够获取最新的值，React 官方提供了一个 Hooks—useEffect。

### 3.1.3 使用 useState 时的注意事项

注意事项一：与 Class 组件中的 setState 方法不同，useState 不会自动合并更新对象，所以需要使用展开运算符（或者 Object.assign）来达到合并更新对象的效果。

注意事项二：useState 更新值后经常会出现值更新不及时的 bug。

### 3.1.4 useState 原理解读

## 3.2 useRef

useRef 返回一个可变的 ref 对象，该对象只有一个 current 属性，初始值为传入的参数(initialValue)，并且返回的 ref 对象在组件的整个生命周期内保持不变。

useRef 是来解决如下问题的：1）获取子组件或者 DOM 节点的实例对象；2）存储渲染周期之间的共享数据。

### 3.2.1 上手使用 useRef

1. 获取子 DOM 节点的实例
2. 存储渲染周期之间的共享数据

### 3.2.2 使用 useRef 时的注意事项

注意事项一：组件的每次渲染，useRef 返回值都不变。

注意事项二：ref.current 发生变化并不会造成重新渲染。

注意事项三：不可以在 render 里更新 ref.current 值。

注意事项四：如果给一个组件设定了 ref 属性，但是对应的值却不是由 useRef 创建的，那么实际运行中会收到 React 的报错，无法正常渲染。

注意事项五：ref.current 不可作为其他 Hooks 的依赖项，因为 ref 是可变的，不会使界面再次渲染。

## 3.3 forwardRef

### 3.3.1 上手使用 forwardRef

### 3.3.2 使用 forwardRef 时的注意事项

## 3.4 useImperativeHandle

### 3.4.1 上手使用 useImperativeHandle

### 3.4.2 使用 useImperativeHandle 时的注意事项

### 3.4.3 useImperativeHandle 原理解读

## 3.5 useEffect

useEffect 就是我们常说的 React 中的副作用。执行 setState 会产生新的更新，而每次更新都会触发 useEffect 的依赖监听。useEffect 接收一个方法作为第一个参数，该方法会在每次渲染完成之后被调用。它还会接收一个数组作为第二个参数，这个数组里的每一项内容都会被用来进行渲染前后的对比，如果没有变化，则不会调用该副作用。

### 3.5.1 上手使用 useEffect

### 3.5.2 使用 useEffect 时的注意事项

### 3.5.3 useEffect 原理解读

## 3.6 useLayoutEffect

### 3.6.1 上手使用 useLayoutEffect

### 3.6.2 useEffect 与 useLayoutEffect 的区别

## 3.7 useReducer

useReducer 可以同时更新多个状态，当状态更新逻辑较复杂时就可以考虑使用 useReducer 了。相比 useState，useReducer 可以更好地描述“如何更新状态”​。比如，useReducer 能够读取相关的状态，同时更新多个状态。​“组件负责发出行为，useReducer 负责更新状态”的解耦模式，会使代码逻辑更加清晰，代码行为更易预测，代码性能更高。

### 3.7.1 上手使用 useReducer

### 3.7.2 useState 与 useReducer 的实例对比

### 3.7.3 使用 useReducer 时的注意事项

## 3.8 useMemo

React 由于虚拟 DOM 的关系，当父组件（函数）重新调用的时候，子组件就会被重新调用。这样就多出了无意义的性能开销，实际上状态没有变化的子组件，是不需要重新渲染的。

在 React 的 class 时代，我们一般通过 pureComponent 对数据进行一次浅比较，以判断是否需要重新渲染。React 引入 Hooks 特性后，我们可以使用 React.memo 来解决这个问题，达到提高性能优化的目的。

### 3.8.1 上手使用 React.memo

### 3.8.2 上手使用 useMemo

### 3.8.3 React.memo 与 useMemo 的最佳使用场景

## 3.9 useCallback

前面我们学习了 useMemo，useMemo 能够达到缓存某个变量值的效果，其实 useCallback 与 useMemo 比较类似，只不过它返回的是缓存的函数。

React 子组件的 props 在浅比较的时候就会认为 props 改变了，从而引起子组件也重新渲染。这个时候就要用到 useCallback 了。useCallback 可以保证，无论渲染多少次，函数都是同一个函数，这样可以减小不断创建新函数带来的性能和内存开销问题。

### 3.9.1 上手使用 useCallback

### 3.9.2 使用 useCallback 时的注意事项

## 3.10 useContext

## 3.11 自定义 Hooks

自定义 Hooks 最重要的作用是`逻辑复用`，并非数据的复用，也不是 UI 的复用（需要复用 UI 可以封装组件实现）​。一切皆函数，`自定义 Hooks 其实也是一个普通函数，只不过在自定义 Hooks 内部，可以使用任何内置的 Hooks，并且可以返回任意数据，甚至是 JSX`。相当于把组件的一部分抽离出来，进行复用。

### 3.11.1 上手自定义 Hooks

### 3.11.2 编写自定义 Hooks 的注意事项
