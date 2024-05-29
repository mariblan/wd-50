import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import OneUser from './pages/OneUser';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import { getAllUsers, getUserById } from './Service/fetchDB.js';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    // fetch('http://localhost:8000/users')
    //   .then((response) => response.json())
    //   .then((data) => setUsers(data))
    //   .catch((error) => setError(error));
    getAllUsers().then(data => setUsers(data))
  }, []);

  useEffect(() => {
    // fetch('http://localhost:8000/users/1')
    //   .then((response) => response.json())
    //   .then((data) => setUser(data[0]))
    //   .catch((error) => setError(error));
    getUserById(2).then(data => setUser(data));
  }, []);

  console.log(users, error);
  console.log(user);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users users={users} />} />
          <Route path='/users/:id' element={<OneUser users={users} />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
