import logo from './logo.svg';
import './App.css';
import React from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

export default class App extends React.Component {
  // 在 React 类组件中，constructor(props) 是组件的构造函数，用来初始化组件的状态或绑定方法。
  //在 React 类组件中，constructor 用来初始化组件的内部状态或为事件处理方法绑定 this。
  constructor(props) {
    //super(props) 的作用是调用父类（即 React.Component）的构造函数，并将 props 传递给它。
    //这是必要的，因为 React 需要初始化组件的内置功能，包括访问 this.props。
    super(props);
    this.state = {
      todoItems: [
        {
          id: 0,
          value: "React",
          done: false,
          delete: false,
        }
      ]
    };
    this.inputRef = React.createRef();
  }

  addTodoItem = (inputValue) => {
    const newTodoItem = {
      id: this.state.todoItems.length,
      value: inputValue,
      done: false,
      delete: false,
    }
    this.setState({
      todoItems: [...this.state.todoItems, newTodoItem]
    })
  }

  deleteTodoItem = (item) => {
    item.delete = true;
    this.setState({
      todoItems: [...this.state.todoItems, item]
    })
  }

  render() {
    return (
      <div>
        <h1>todo-list</h1>
        <div>
          <TodoForm
            addTodoItem={this.addTodoItem}
          />
          <TodoList
            todoItems={this.state.todoItems}
            deleteTodoItem={this.deleteTodoItem}
          />
        </div>
      </div>
    )
  }
}