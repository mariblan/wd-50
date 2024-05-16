import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>
        {/* UNCOMMENT WHEN ROUTING IS ADDED TO THE APP COMPONENT 
         <Link className="link" to="/students">
          Students
        </Link>
        <Link className="link" to="/results">
          Results
        </Link> */}
      </nav>
      <div className='Instructions'>
        <div className='block'>
          <h2>Instructions</h2>
          <ol>
            <li>
              Create a component named {'<Student>'} that will display{' '}
              <b>Hello you!</b> and add it to the {'<App>'} component. (Don't
              forget to import this new component in your App.js file)
            </li>
            <li>
              Create a second component named {'<Results>'} that will display{' '}
              <b>No results for now!</b> and add it to the {'<App>'} component.
              (Don't forget to import this new component in your App.js file)
            </li>
            <li>
              The navigation is already created for you inside the nav element
              of App.jsx, although is commented out. Take a moment and have a
              look on it.
            </li>
            <li>
              Now, define your routing. You should create two routes:
              <ul>
                <li>/student: shows the Student component</li>
                <li>/results: shows the results component</li>
              </ul>
              <ol>
                <li>
                  Create the routes for the components <b>Student</b> and{' '}
                  <b>Results</b>:
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
                      In App.jsx, import the <b>App</b>, <b>Student</b> and{' '}
                      <b>Results</b> components at the top of the file.
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
                              give the path {'/student'} for the <b>Student</b>
                              component
                            </li>
                            <li>
                              In the first route, add the element attribute and
                              inject the <b>Student</b> component as its value.
                            </li>
                            <li>
                              In the second route, add the path attribute and
                              give the path {'/results'} for the Results
                              component
                            </li>
                            <li>
                              In the first route, add the element attribute and
                              inject the Results component as its value.
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              Now, uncomment the code inside the nav element (the already
              prepared navigation), and click the links to test it out.
            </li>
          </ol>
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

        <p className='block'>Create your routing here! (Routes & Route)</p>
      </div>
    </div>
  );
}

export default App;
