import './App.css';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <nav>
        <NavLink
          to='/page1'
          style={({ isActive }) =>
            isActive
              ? { color: 'red', fontWeight: 'bold' }
              : { color: 'cornflowerblue' }
          }
          className='link'
        >
          Component 1
        </NavLink>
        <NavLink
          to='/page2'
          style={({ isActive }) =>
            isActive
              ? { color: 'red', fontWeight: 'bold' }
              : { color: 'cornflowerblue' }
          }
          className='link'
        >
          component 2
        </NavLink>
      </nav>
      <div className='Instructions'>
        <div className='block'>
          {' '}
          <p className='block2'>
            For this exercise, you will have to change the style of the link
            when the URL match with the path. When a link is <b>active</b> it
            needs to be <b>bold</b> and{' '}
            <span style={{ color: 'red' }}>red</span>.
          </p>
          <div className='block2'>
            <ol>
              <li>
                Create the routes for the components 1 and 2:
                <ul>
                  <li>
                    Create the routes for the components <b>Component1</b> and{' '}
                    <b>Component2</b>:
                    <ul>
                      <li>
                        In main.jsx import the element <b>BrowserRouter</b> from{' '}
                        <b>react-router-dom</b>
                        <ul>
                          <li>
                            Use it inside the render method as html tags
                            wrapping around all that is already inside.
                          </li>
                        </ul>
                      </li>
                      <li>
                        In App.jsx, import the <b>App</b>, <b>Component1</b> and{' '}
                        <b>Component2</b> components at the top of the file.
                      </li>
                      <li>
                        Import the <b>Routes</b> and <b>Route</b> elements from{' '}
                        <b>react-router-dom</b> and create the routes as JSX
                        elements inside the return of the <b>App</b> component.
                        <ul>
                          <li>
                            Use the <b>Routes</b> element as html tags with an
                            open and a closing tag.
                          </li>
                          <li>
                            Inside the <b>Routes</b> tags, as children, add two
                            routes using the <b>Route</b> element as a tag.
                            <ul>
                              <li>
                                In the first route, add the path attribute and
                                give the path {'/page1'} for the{' '}
                                <b>Component1</b>
                                component
                              </li>
                              <li>
                                In the first route, add the element attribute
                                and inject the <b>Component1</b> component as
                                its value.
                              </li>
                              <li>
                                In the second route, add the path attribute and
                                give the path {'/page2'} for the{' '}
                                <b>Component2</b>
                                component
                              </li>
                              <li>
                                In the first route, add the element attribute
                                and inject the <b>Component2</b> component as
                                its value.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                Back in App.jsx, import the <b>NavLink</b> element from{' '}
                <b>"react-router-dom"</b>
                <ul>
                  <li>
                    Change the current <b>{`<a></a>`}</b> elements for the{' '}
                    <b>{`<NavLink></NavLink>`}</b>
                    element you have just imported{' '}
                  </li>
                  <li>
                    Use the <b>style</b> attribute to add the styling of the
                    elements to red if they are active and blue if they are
                    inactive.
                  </li>
                  <li>
                    Use the <b>to</b> attribute to add the path the link is
                    redirecting to.
                  </li>
                </ul>
              </li>
              <li>Now test the links and see if they change their colors.</li>
            </ol>
          </div>
          <div>
            <a
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://reactrouter.com/en/main/router-components/browser-router'
            >
              BrouserRouter{' '}
            </a>
            <a
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://reactrouter.com/en/main/components/nav-link'
            >
              NavLink{' '}
            </a>
            <a
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://reactrouter.com/en/main/components/link'
            >
              Link{' '}
            </a>
          </div>
        </div>
      </div>
      <div className='block'>
        <Routes>
          <Route path='/page1' element={<Component1 />} />
          <Route path='/page2' element={<Component2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
