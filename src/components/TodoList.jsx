import React, { useState } from 'react'
import TodoItem from "./TodoItem"


const TodoList = (props) => {
  const [edittedTodo, setEdittedTodo] = useState("")

  const completeTodo = (id) => {
    props.setTodoList(prevTodoList => prevTodoList.map(todoItem => todoItem.id === id ? { ...todoItem, isCompleted: !todoItem.isCompleted } : todoItem))
  }

  const editTodo = (id, oldTodo) => {
    props.setTodoList(prevTodoList => prevTodoList.map(todoItem => todoItem.id === id ? { ...todoItem, isEditable: !todoItem.isEditable } : todoItem))
    setEdittedTodo(oldTodo)
  }

  const saveTodo = (id) => {
    props.setTodoList(prevTodoList => prevTodoList.map(todoItem => todoItem.id === id ? { ...todoItem, isEditable: !todoItem.isEditable, title: edittedTodo } : todoItem))
  }

  const deleteTodo = (id) => {
    props.setTodoList(prevTodoList => prevTodoList.filter(todoItem => todoItem.id !== id))
  }


  return (
    <div className='mt-5 w-75'>
      {
        props.todoList.map(todoItem =>
          <TodoItem key={todoItem.id} todoItem={todoItem} completeTodo={completeTodo} deleteTodo={deleteTodo} saveTodo={saveTodo} editTodo={editTodo}  edittedTodo={edittedTodo} setEdittedTodo={setEdittedTodo} ></TodoItem>
        )
      }
    </div>
  )
}

export default TodoList
