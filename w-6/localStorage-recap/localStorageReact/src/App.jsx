import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('todos') !== null) {
      setTodos(JSON.parse(localStorage.getItem('todos')));
    }
  }, []);

  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== '') {
      setTodos([...todos, todo]);
      localStorage.setItem('todos', JSON.stringify([...todos, todo]));
    }
    setTodo('');
  };

  const editTodo = (e) => {
    console.log(e.target);
  };

  const deleteTodo = (e) => {
    let id = e.target.id;
    console.log(e.target.id);
    console.log(typeof id);
    let updatedTodos = todos.filter((todo, index) => {
      if (index !== parseInt(id)) {
        return todo;
      }
    });
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
    console.log(updatedTodos);
  };
  console.log(todo);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor='todo'></label>
        <input
          onChange={handleChangeTodo}
          type='text'
          id='todo'
          name='todo'
          value={todo}
        />
        <button>Add</button>
      </form>
      <div>
        <h2>To Do List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <span>{todo}</span>
              <button id={index}>Edit</button>
              <button id={index} onClick={deleteTodo}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
