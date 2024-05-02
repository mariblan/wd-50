import './App.css';
import { Routes, Route } from 'react-router-dom';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Component3 from './components/Component3';
import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';

function App() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'purple' : 'blue' })}
        to='/'
      >
        Home
      </NavLink>
      <br />
      <NavLink
        style={({ isActive }) => ({ color: isActive ? 'purple' : 'blue' })}
        to='/page2'
      >
        Page2
      </NavLink>
      <br />
      <Link to='/page3'>Page3</Link>

      <Routes>
        <Route
          path='/'
          element={<Component1 todos={todos} setTodos={setTodos} />}
        />
        <Route path='/page2' element={<Component2 onClick={handleClick} />} />
        <Route path='/page3' element={<Component3 onClick={handleClick} />} />
        {/* <Routes></Routes> */}
      </Routes>
    </div>
  );
}

export default App;
