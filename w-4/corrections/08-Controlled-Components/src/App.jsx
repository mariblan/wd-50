import './App.css';
import { useState, useEffect } from 'react';
import Instructions from './instructions/Instructions';
import DisplayToDos from './components/DisplayToDos';
import Form from './components/Form';

export default function App() {
  // This state should contain the array of to-dos
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Walk the dog!',
      deadline: '20/06/2023',
      priority: 'high',
      done: false,
    },
  ]);
  const [toDo, setToDo] = useState({});

  useEffect(() => {
    const data = localStorage.getItem('todos');
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, [toDo]);

  return (
    <div className='App'>
      <Instructions />
      <Form setToDo={setToDo} todos={todos} setTodos={setTodos} />
      <DisplayToDos todos={todos} setTodos={setTodos} />
    </div>
  );
}
