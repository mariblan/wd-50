import './App.css';
import Instructions from './instructions/Instructions';
import Students from './components/Students';
import { Routes, Route, NavLink } from 'react-router-dom';
import Student from './components/Student';
function App() {
  return (
    <div className='App'>
      <nav>
        <NavLink className='link' to='/students'>
          Students
        </NavLink>
      </nav>
      <div className='Instructions'>
        <div className='block'>
          <Routes>
            <Route path='/students' element={<Students />} />
            <Route path='/students/:id' element={<Student />} />
          </Routes>
        </div>
        <Instructions />
      </div>
    </div>
  );
}

export default App;
