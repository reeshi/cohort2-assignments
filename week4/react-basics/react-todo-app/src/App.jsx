import { useState } from "react"

function App() {
  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const [todos, setTodos] = useState([]);

  function addTodo() {
    setTodos((prev) => [...prev, {
      title,
      description
    }])
  }

  function deleteTodo(idx) {
    const updatedTodos = [...todos];
    // remove todo
    updatedTodos.splice(idx, 1);
    setTodos(updatedTodos);
  }

  return (
    <>
      <label htmlFor="title">Title</label>
      <br />
      <input type="text" name="title" id="title" placeholder="Todo title" onChange={(e) => setTitle(e.target.value)} />
      <br />
      <br />
      <label htmlFor="description">Description</label>
      <br />
      <input type="text" name="description" id="description" placeholder="Todo description" onChange={(e) => setDescription(e.target.value)} />
      <br />
      <br />
      <input type="submit" value="Add Todo" onClick={addTodo}/>
      <br />
      <div>
        {
          todos.map((todo, idx) => (
            <div key={idx} style={{padding: '20px'}}>
              <div>{todo.title}</div>
              <div>{todo.description}</div>
              <button onClick={() => deleteTodo(idx)}>Delete todo</button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
