import React from 'react'
import './todo.css'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faAirFreshener } from '@fortawesome/free-solid-svg-icons'

function Todo({text, todo ,todos ,setTodos}) {

    const deletehandler = (e) => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }

    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
                return {
                    ...item , complete: !item.complete
                }
            }
            return item
        }))
    }

  return (
    <div className='todos-text'>
      <li className={`todo-item ${todo.complete ? "complete" : ''}`}>{text}</li>
      <div className='todo-btn'>
        
      <button onClick={completeHandler} type="">Done</button>
      <button onClick={deletehandler} type=''>Delete</button>
      </div>
    </div>
  )
}

export default Todo
