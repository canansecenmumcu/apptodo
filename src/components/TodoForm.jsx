import React, {  useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { v4 as uuidv4 } from 'uuid';


const TodoForm = (props) => {
  const [newTodo, setNewTodo] = useState("");
  const addTodo=()=> {
    props.setTodoList(prevTodoList => [...prevTodoList, {id:uuidv4(), title:newTodo, isCompleted:false, isEditable:false }]);
    setNewTodo("")
  }

  // useEffect(() => { console.log(props.todoList) }, [props.todoList])

  return (
    <div className="mt-4 d-flex w-50" >
      <Form.Control
        className='me-2'
        type="text"
        placeholder="Todo Input"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <Button onClick={() => addTodo()} >Add Todo</Button>
    </div>
  )
}

export default TodoForm
