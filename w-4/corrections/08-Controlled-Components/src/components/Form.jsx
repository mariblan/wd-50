import { useState } from 'react';

const Form = ({ todos, setTodos, setToDo }) => {
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');
  const [isPriority, setIsPriority] = useState({
    low: true,
    medium: false,
    high: false,
  });

  // HANDLE SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    let priority;
    if (isPriority.low) {
      priority = 'low';
    } else if (isPriority.medium) {
      priority = 'medium';
    } else if (isPriority.high) {
      priority = 'high';
    }
    setToDo({ id: todos.length + 1, title, deadline, priority, done: false });
    localStorage.setItem(
      'todos',
      JSON.stringify([
        ...todos,
        { id: todos.length + 1, title, deadline, priority, done: false },
      ])
    );

    setTitle('');
    setDeadline('');
    setIsPriority({
      low: '',
      medium: '',
      high: '',
    });
  };
  //HANDLE CHANGES
  console.log(todos);
  const handleTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleDeadline = (event) => {
    setDeadline(event.target.value);
  };
  const handlePriority = (event) => {
    if (event.target.name === 'low') {
      setIsPriority({
        ...isPriority,
        low: true,
        medium: false,
        high: false,
      });
    } else if (event.target.name === 'medium') {
      setIsPriority({
        ...isPriority,
        low: false,
        medium: true,
        high: false,
      });
    } else {
      setIsPriority({
        ...isPriority,
        low: false,
        medium: false,
        high: true,
      });
    }
  };

  return (
    <div className='block'>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <h3>Add a To-do</h3>
          </legend>
          <div>
            <label htmlFor='title'>To Do</label>
            <input
              onChange={handleTitle}
              value={title}
              name='title'
              type='text'
              placeholder='To Do'
            />
          </div>
          <div>
            <label htmlFor='deadline'>Deadline</label>
            <input
              onChange={handleDeadline}
              value={deadline}
              name='deadline'
              type='date'
            />
          </div>
          <div>
            <label>Priority?</label>
            <div>
              <label htmlFor='low'>low</label>
              <input
                onChange={handlePriority}
                value={isPriority.low}
                id='low'
                name='low'
                type='radio'
              />
            </div>
            <div>
              <label htmlFor='medium'>medium</label>
              <input
                onChange={handlePriority}
                id='medium'
                name='medium'
                type='radio'
                value={isPriority.medium}
              />
            </div>
            <div>
              <label onChange={handlePriority} htmlFor='hard'>
                high
              </label>
              <input
                id='hard'
                name='high'
                type='radio'
                value={isPriority.high}
              />
            </div>
          </div>
          <button>Add</button>
        </fieldset>
      </form>
    </div>
  );
};
export default Form;
