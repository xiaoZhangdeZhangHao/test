//@ts-nocheck
import React, { Component, useState } from 'react'

// /^1*11/


// 检测array
let arr = [1, 2, 3];
let res = arr.constructor()
console.log(res);

console.log(res === []);

// 检测对象

interface Todo {
  text: string;
  id: number;
  completed: boolean;
}
function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>('');

  //添加
  const AddTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, id: Date.now(), completed: false }]);
      setInput('');
    }
  }

  //删除
  const DeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id != id));
  }

  // 完成状态
  const toggleCompleted = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id == id ? { ...todo, completed: !todo.completed } : todo
    )
    )

    console.log("已选中")
  }

  return  (
    <div >
      <h1>待办事项</h1>
      <input
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder='请输入待办事项'
      />
      <button onClick={AddTodo}>添加</button>
      <ul>
        {
          todos.map(todo => (
            <li
              key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
              />
              <span></span>
              {todo.text}
              <button onClick={() => DeleteTodo(todo.id)}>删除</button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList