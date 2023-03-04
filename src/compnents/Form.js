import React from 'react'
import './form.css'
import AddBtn from '../utilties/AddBtn2.png'

function Form({setInputText, todos , inputText , setTodos}) {
    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodohandler = (e) => {
        e.preventDefault();
        setTodos([...todos,
            {
                text:inputText , completed:false, id:Math.random()*1000

        }])

        setInputText("")

    }
  return (
    <div>
      <form className='form'>
        <div className='inp-area'>
            
        <input value={inputText} onChange={inputTextHandler} type='text' className='todo-inp'/>
        <button className='form-btn' onClick={submitTodohandler} type="submit" >
            <img src={AddBtn} className='submitBtn' alt="Add Button"/>
           
        </button>
        </div>

        {/* <div className='dropdown-area'>
            <select name='todos' className='filter-todo' >
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="not-completed">Not Completed</option>
                
            </select>
        </div> */}
        </form> 
    </div>
  )
}

export default Form
