import React from "react";
import TodoListItem from "./TodoListItem";

export default class TodoList extends React.Component {
    deleteTodoItem = (item) => {
        this.props.deleteTodoItem(item)
    }

    render() {
        return (
            <ul>
                {
                    this.props.todoItems.map((item) => {
                        if (item.delete) return;
                        return <TodoListItem
                            key={item.id}
                            item={item}
                            /**
                             * 这里使用的箭头函数形成了闭包。
                             * 闭包是指有权访问另一个函数作用域中变量的函数。
                             * 简单来说，即使该函数执行完毕，其作用域内的变量也不会被销毁，外部函数依然可以访问这些变量。
                             */
                            deleteTodoItem={() => {
                                this.deleteTodoItem(item)
                            }}
                        />
                    })
                }
            </ul>
        )
    }
}