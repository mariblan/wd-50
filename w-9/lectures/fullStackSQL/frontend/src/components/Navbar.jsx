import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='nav-left'>
        <li>
          <Link to={'/'}>WBS</Link>
        </li>
      </ul>
      <ul className='nav-center'>
        <li>
          <NavLink
            style={(isActive) => {
              isActive ? { color: 'purple' } : { color: 'cornblue' };
            }}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={(isActive) => {
              isActive ? { color: 'purple' } : { color: 'cornblue' };
            }}
            to='/users'
          >
            Users
          </NavLink>
        </li>
      </ul>
      <ul className='nav-right'>
        <li>
          <NavLink
            style={(isActive) => {
              isActive ? { color: 'purple' } : { color: 'cornblue' };
            }}
            to='/login'
          >
            Log In
          </NavLink>
        </li>
        <li>
          <NavLink
            style={(isActive) => {
              isActive ? { color: 'purple' } : { color: 'cornblue' };
            }}
            to='/register'
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
