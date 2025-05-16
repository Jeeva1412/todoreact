import React, { useState } from "react"

function TodoApp() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("")

  const addTodo = (e) => {
    e.preventDefault()
    if (input.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }])
      setInput("")
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="container ">
      <div className="card " id="card" >
      <div className="card-body">
      <h1 className="text-dark text-center card-title">Todo app with changes </h1>

      <form onSubmit={addTodo} className="mb-6 text-center d-flex justify-content-center mt-5" style={{ width: "100%", height: "100%" }}>

        <div className="card w-50 p-3">
        <div className="row">
          <div className="col-8"><input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new todo"
            className="w-100 form-control h-100"
          /></div>
          <div className="col-4">
          <button
            type="submit"
            className="btn btn-outline-primary"
          >
            Add Todo
          </button>
          </div>
          
         
        </div>
        </div>
      </form>
      <ul className="list-unstyled">
  {todos.map((todo) => (
    <li key={todo.id} className="d-flex justify-content-between bg-light p-3 rounded shadow-sm mb-3 ">
      <span
        onClick={() => toggleTodo(todo.id)}
        className={`cursor-pointer flex-grow fs-5 ${
          todo.completed ? "text-decoration-line-through text-muted" : "text-dark"
        }`}
      >
        {todo.text}
      </span>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  ))}
</ul>

      </div>
      </div>
    </div>
  )
}

export default TodoApp
