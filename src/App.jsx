import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([])

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5 ">
      <h1 >Todo List</h1>
      <TodoForm todoList={todoList} setTodoList={setTodoList} ></TodoForm>
      <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;