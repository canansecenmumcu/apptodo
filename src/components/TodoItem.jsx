import { Form } from "react-bootstrap"
import { ReactComponent as Delete } from "../assets/Delete.svg"
import { ReactComponent as Edit } from "../assets/Edit.svg"
import { ReactComponent as Save } from "../assets/Save.svg"

const TodoItem = (props) => {
  return (
    <div>

      <div key={props.todoItem.id} className="d-flex justify-content-between mt-3  " >
        <div className="d-flex w-75" >

          {!props.todoItem.isEditable ?
            <div className="d-flex" >
              <Form.Check
                className='me-2'
                type="checkbox"
                value={props.todoItem.isCompleted}
                onChange={() => props.completeTodo(props.todoItem.id)}
              />
              <label className={` ${props.todoItem.isCompleted ? 'text-decoration-line-through' : ''} fw-bold`} > {props.todoItem.title} </label>
            </div>
            :
            <Form.Control
              className='me-2'
              type="text"
              value={props.edittedTodo}
              onChange={(e) => props.setEdittedTodo(e.target.value)}
            />
          }
        </div>

        <div>
          {!props.todoItem.isEditable ?
            <Edit width={25} height={25} style={{ cursor: "pointer" }} className="me-2" onClick={() => props.editTodo(props.todoItem.id, props.todoItem.title)}  ></Edit>
            :
            <Save width={25} height={25} style={{ cursor: "pointer" }} className="me-2" onClick={() => props.saveTodo(props.todoItem.id)} ></Save>}
          <Delete width={25} height={25} style={{ cursor: "pointer" }} onClick={() => props.deleteTodo(props.todoItem.id)}  ></Delete>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
