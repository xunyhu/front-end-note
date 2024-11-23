# 第 1 章　初识 React Hooks

React 是 Facebook 在 2013 年推出的一个用来构建用户界面的开源 JavaScript 库。由于设计思想独特，极具创新性，且拥有较高的性能，代码逻辑简单，React 得到越来越多人的关注和使用。如今，React 已经成为 Web 前端开发领域的主流框架。

## 1.1 React Hooks 概述

Hooks 是 React 官方团队在 React 16.8 版本中正式引入的概念。通俗地讲，Hooks 只是一些函数，`Hooks 可以用于在函数组件中引入状态管理和生命周期方法`。如果希望让 React 函数组件拥有状态管理和生命周期方法，`我们不需要再去将 React 函数组件重构成 React 类组件`，而可以直接使用 React Hooks。

### 1.1.1 React Hooks 的优点

1. 简洁

2. 上手非常简单

   React Class 上手难表现为如下几点。  
   1）生命周期函数难以理解，很难熟练掌握。  
   2）与 Redux 状态管理相关的概念太多。
   3）高阶组件(HOC)很难理解。

   和 React Class 相比，React Hooks 的出现让 React 的学习成本降低了很多。具体体现在如下几点。  
   1）基于函数式编程理念，门槛比较低，只需要掌握一些 JavaScript 基础知识。  
   2）与生命周期相关的知识不用学，React Hooks 使用全新的理念来管理组件的运作过程。  
   3）与 HOC 相关的知识不用学，React Hooks 能够完美解决 HOC 想要解决的问题，并且更可靠。  
   4）MobX 取代了 Redux 来做状态管理。

3. 代码可复用性更好
4. 与 TypeScript 结合更简单

   我们几乎不用关注 React Hooks 组件与 TypeScript 的具体结合方法，这是 Class 组件不具备的。

5. 总结

   最后，总结一下 React Hooks 的几个优点，具体如下。  
   1）声明一个简单的组件只要几行简单的代码。  
   2）容易上手。对于初学者来说，相比复杂的 Class 的声明周期，Hooks 的钩子函数更好理解。  
   3）简化业务。充分利用组件化的思想把业务拆分成多个组件，采用函数式编程风格、函数式组件，状态保存在运行环境中，每个功能都包裹在函数中，整体风格更清爽、更优雅。  
   4）方便数据管理。相当于两种提升：各个组件不用使用非常复杂的 props 多层传输就实现了解耦；向 prop 或状态取值更加方便，`函数组件都从当前作用域直接获取变量，而Class组件需要先访问实例this`，再访问其属性或者方法。  
   5）便于重构。因为减少了很多模板代码，组件，特别是小组件写起来更加省事。人们更愿意去拆分组件。而组件粒度越细，被复用的可能性越大。这样，Hooks 也在不知不觉中改变人们的开发习惯，提高项目的组件复用率。

### 1.1.2 React Hooks 的缺点

1. 状态不同步问题

   React Hooks 是函数的形式，而函数的运行是独立的，每个函数都有一个独立的作用域。函数的变量保存在运行时的作用域里，`当我们有异步操作的时候，经常会碰到异步回调的变量引用的是之前的，值没有更新`。这其实就是我们常说的闭包问题。

2. useEffect 依赖问题

   有时候，某个 useEffect 依赖某个函数的不可变性 ​，这个函数的不可变性又依赖另一个函数的不可变性，这样便形成了一条依赖链。一旦这条依赖链的某个节点被意外改变，那么所有 useEffect 就会被意外触发。`如果某个组件中依赖层级很多，那么就会造成严重的性能问题`。

   解决这个问题的方案就是，尽量减少 useEffect 的依赖项，让 useEffect 的每个依赖项都是明确的，保持它的单一职责性，增强组件的颗粒化。

### 1.1.3 使用 React Hooks 时的注意事项

1. 自定义的 React Hooks 要遵循一些命名规范

   自定义 React Hooks 的命名一律使用 use 作为前缀，形如 useXXX，例如 userUserInfo。虽然这仅是一种编码习惯，但是为了代码的可维护性，我们必须遵守这个规范。

2. 仅在最外层调用 React Hooks

   不要在循环、条件和嵌套函数内调用 React Hooks。当你想有条件地使用某些 React Hooks 时，请在这些 Hooks 中写入条件。这样能够确保每次组件呈现时都以相同的顺序调用 React Hooks，避免出现一些不可确定的 bug。

3. 仅从 React 函数中调用 React Hooks

   不要从常规 JavaScript 函数中调用 React Hooks，只在自定义 React Hooks 或者 React 组件中调用 React Hooks，这不仅能够确保组件中的所有状态逻辑都清晰可见，还能够避免出现一些不可确定的 bug。

## 1.2 React Hooks 生命周期

### 1.2.1 理解 React Hooks 生命周期

我们知道 React Hooks 是一种函数式的语法方式，每一个函数都是一个组件。普通的函数是不存在状态的，而`生命周期存在的前提是有多状态`，所以普通函数不存在生命周期。

常规的 React 仅是一个 render 函数而已，但在引入 Hooks 之后就变得不同了，它能让组件在不使用 Class 的情况下拥有状态，所以就有了生命周期的概念。所谓的生命周期其实就是从变量声明到变量渲染完成的整个过程，这主要涉及如下几个函数。

1）useState()：声明变量函数。  
2）useEffect()：渲染完成后执行函数。  
3）useLayoutEffect()：渲染前执行函数。

综上所述，Hooks 组件（使用了 Hooks 的函数组件）有生命周期，而函数组件（未使用 Hooks 的函数组件）是没有生命周期的。

### 1.2.2 函数式渲染与生命周期的关系

<table>
    <tr>
        <th colspan="2">Class与Hooks的生命周期对应关系</th>
    </tr>
    <tr>
        <th>Class组件</th>
        <th>Hooks组件</th>
    </tr>
    <tr>
        <th>constructor</th>
        <th>useState</th>
    </tr>
    <tr>
        <th>getDerivedStateFromProps</th>
        <th>useState里的Update函数</th>
    </tr>
    <tr>
        <th>render</th>
        <th>函数本身</th>
    </tr>
    <tr>
        <th>componentDidMount</th>
        <th>useEffect</th>
    </tr>
    <tr>
        <th>componentDidUpdate</th>
        <th>useEffect</th>
    </tr>
    <tr>
        <th>componentWillUnmount</th>
        <th>useEffect里的返回函数</th>
    </tr>
    <tr>
        <th>getDerivedStateFromError</th>
        <th>无</th>
    </tr>
    <tr>
        <th>componentDidCatch</th>
        <th>无</th>
    </tr>
    <tr>
        <th>getSnapshotBeforeUpdate</th>
        <th>无</th>
    </tr>
    <tr>
        <th>getDerivedStateFromProps</th>
        <th>无</th>
    </tr>
</table>

### 1.2.3 函数式渲染的特点

函数式渲染具有以下显著特点。

1. 当给定相同输入（函数的参数）的时候，总是有相同的输出（返回值）​。
2. 没有副作用。
3. 不依赖于函数外部状态。
4. 告别繁杂的 this 和难以记忆的生命周期。
5. 支持包装自己的 Hooks（自定义 Hooks）​，是纯命令式的 API。
6. 可更好地完成状态之间的共享，解决了原来 Class 组件内部封装的问题，以及高阶组件和函数组件嵌套过深的问题。每个组件都有一个自己的状态，这个状态在该组件内可以共用。
