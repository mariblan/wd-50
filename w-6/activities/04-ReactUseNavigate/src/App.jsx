import './App.css';
import Teachers from './components/Teachers';
import Students from './components/Students';

function App() {
  return (
    <div className='App'>
      <nav>{/* CREATE NAVIGATIONAL LINKS */}</nav>
      <div className='Instructions'>
        <div className='block'>
          <h2>Instructions</h2>
          <p className='block2'>
            For this exercise, you will have to redirect backward or forward by
            using a <b>Go back</b> and a <b>Go forward</b> button.
          </p>
          <div className='block2'>
            <ol>
              <li>
                Create the routes for the components <b>Students</b> and{' '}
                <b>Teachers</b>:
                <ul>
                  <li>
                    In main.jsx import the element <b>BrowserRouter</b> from{' '}
                    <b>react-router-dom</b>
                    <ul>
                      <li>
                        Use it inside the render method as html tags wrapping
                        around all that is already inside.
                      </li>
                    </ul>
                  </li>
                  <li>
                    In App.jsx, import the <b>App</b>, <b>Students</b> and{' '}
                    <b>Teachers</b> components at the top of the file.
                  </li>
                  <li>
                    Import the <b>Routes</b> and <b>Route</b> elements from{' '}
                    <b>react-router-dom</b> and create the routes as JSX
                    elements inside the return of the <b>App</b> component.
                    <ul>
                      <li>
                        Use the <b>Routes</b> element as html tags with an open
                        and a closing tag.
                      </li>
                      <li>
                        Inside the <b>Routes</b> tags, as children, add two
                        routes using the <b>Route</b> element as a tag.
                        <ul>
                          <li>
                            In the first route, add the path attribute and give
                            the path {'/students'} for the <b>Students</b>
                            component
                          </li>
                          <li>
                            In the first route, add the element attribute and
                            inject the <b>Students</b> component as its value.
                          </li>
                          <li>
                            In the second route, add the path attribute and give
                            the path {'/teachers'} for the <b>Teachers</b>
                            component
                          </li>
                          <li>
                            In the first route, add the element attribute and
                            inject the <b>Teachers</b> component as its value.
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li>
                Back in App.jsx, add the Navigation Links at the top of the file
                for the <b>Students</b> and <b>Teachers</b> component.
                <ul>
                  <li>
                    <b>
                      Make sure they show different colors if they are active or
                      inactive.
                    </b>
                  </li>
                </ul>
              </li>
              <li>
                In the <b>Students</b> component:
                <ul>
                  <li>
                    Add three buttons: <b>Go Back</b>, <b>Go Forward</b> and{' '}
                    <b>Go Home</b>
                  </li>
                  <li>
                    Import useNavigate at the top of the file from{' '}
                    <b>react-router-dom</b>
                  </li>
                  <li>
                    Create a variable named <b>navigate</b> and pass the value
                    of the useNavigate hook being called.
                  </li>
                  <li>
                    Pass an onClick on each one of the buttons and ass its value
                    use an anonymouse function:
                    <ul>
                      <li>The function should call the navigate variable</li>
                      <li>
                        Navigate should pass the following values in each
                        button:
                        <ul>
                          <li>
                            <b>Go Back</b>: -1
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <b>Go Forward</b>: +1
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <b>Go Home</b>: {`/`}
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>Repeat step 3 inside the Teachers component</li>
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
            <a
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://reactrouter.com/en/main/hooks/use-navigate'
            >
              useNavigate{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
