import React, { useState } from "react";
import "./styles.css"

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault();

    setTodos(currentTodos => {
      return [
      ...currentTodos,
      {id: crypto.randomUUID(), title: newItem, completed: false}
    ]
  
  })
  setNewItem("")
  }

  return ( 
  <>
  <form onSubmit={handleSubmit} className="new-item-form"> 
    
      <label htmlFor="item">New Item</label>
      <input value={newItem} onChange={e => setNewItem(e.target.value)} 
      type="text" id="item"></input>
    
    <button className="btn">Add</button>
    </form>
    <h1 className="header">ToDo List</h1>
    <ul className="list">
      {todos.map(todo => {
        return (  <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed}/>
            {todo.title}
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
        )
      })}   {/* Any thing you write in curly braces it's going to run it as javascript code and returns below*/}
      <li>
        <label>
          <input type="checkbox" />
            Item 1
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      <li>
        <label>
          <input type="checkbox" />
            Item 2
        </label>
        <button className="btn btn-danger">Delete</button>
      </li>
    </ul>
  </>
  )
}