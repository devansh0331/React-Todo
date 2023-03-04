import React , {useState} from 'react'

import './App.css';
import Form from './compnents/Form'
import Todo from './compnents/TodoList'


function App() {
  const [inputText , setInputText] = useState('')
  const [todos , setTodos] = useState([])
  const [status , setStatus] = useState("all")
  return (
    <div className="App">
      <h1>Devansh's Todo</h1>
      <Form inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText} setStatus={setStatus}/>
      <Todo setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
