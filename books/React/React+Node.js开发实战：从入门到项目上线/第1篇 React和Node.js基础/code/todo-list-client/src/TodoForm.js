import React from "react";

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        // 初始化 ref
        this.inputRef = React.createRef();
    }

    addTodoItem = () => {
        // 获取输入框的值
        const inputValue = this.inputRef.current ? this.inputRef.current.value : '';
        // 输入验证，如果输入为空，直接返回
        if (inputValue.trim() === '') return;

        // 调用父组件传递的函数添加待办事项
        this.props.addTodoItem(inputValue);

        // 清空输入框
        if (this.inputRef.current) {
            this.inputRef.current.value = '';
        }
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    placeholder='add something'
                    ref={this.inputRef}
                />
                <button type='submit' onClick={this.addTodoItem}>
                    添加
                </button>
            </div>
        )
    }
}