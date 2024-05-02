import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>
        {/* <Link className="link" to="/students">
          Students
        </Link>
        <Link className="link" to="/results">
          Results
        </Link> */}
      </nav>
      <div className='Instructions'>
        <div className='block'>
          For this exercise, you will have to:
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
                <li>/students: shows the Students component</li>
                <li>/results: shows the results component</li>
              </ul>
              <ol>
                <li>
                  Create the routes for the components <b>Students</b> and{' '}
                  <b>Results</b>:
                  <ul>
                    <li>
                      Create a file named <b>router.jsx</b>
                    </li>
                    <li>
                      Import the <b>App</b>, <b>Students</b> and <b>Results</b>{' '}
                      components at the top of the file.
                    </li>
                    <li>
                      Import the createRoutesFromElements element from{' '}
                      <b>"react-router-dom"</b> and create the routes as JSX
                      elements and save it to a variable <b>OR</b> create an
                      array of objects with the routes.
                      <ul>
                        <li>
                          The variable where you store this should be named
                          routes.
                        </li>
                        <li>
                          You should create a route for each element, with the{' '}
                          <b>App</b> route being the default route for path (
                          <b>{`/`}</b>
                          ).
                        </li>
                      </ul>
                    </li>
                    <li>
                      Import the createBrowserRouter elment from{' '}
                      <b>"react-router-dom"</b> and use it to create the router,
                      passing the routes variable as the argument.{' '}
                      <ul>
                        <li>
                          The variable where you store this should be called
                          router.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Export the router and import it into <b>main.jsx</b>
                    </li>
                    <li>
                      In <b>main.jsx</b>, import also the RouterProvider element
                      from <b>"react-router-dom"</b>, and then return it instead
                      of the <b>App()</b> inside the render mehtod, between the
                      StrictMode elements. Pass the router as props.
                      <ul>
                        <li>
                          It should look like this:{' '}
                          {`<RouterProvider router={router} />`}
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
              href='https://reactrouter.com/en/main/utils/create-routes-from-elements'
            >
              createRoutesFromElements{' '}
            </a>
            <a
              className='link'
              target='_blank'
              rel='noopener noreferrer'
              href='https://reactrouter.com/en/main/routers/create-browser-router'
            >
              CreateBrouserRouter{' '}
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
