import './App.css';

function App() {
  return (
    <div className='App'>
      <nav>
        <a className='link'>Component 1</a>
        <a className='link'>component 2</a>
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
                    Create a file named <b>router.jsx</b>
                  </li>
                  <li>
                    Import the <b>App</b>, <b>Component1</b> and{' '}
                    <b>Component2</b> components at the top of the file.
                  </li>
                  <li>
                    Import the createRoutesFromElements element from{' '}
                    <b>"react-router-dom"</b> and create the routes as JSX
                    elements and save it to a variable <b>OR</b> create an array
                    of objects with the routes.
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
              <li>
                Back in App.jsx, import the <b>NavLink</b> element from{' '}
                <b>"react-router-dom"</b>
                <ul>
                  <li>
                    Change the current {`<a></a>`} elements for the NavLink
                    element you have just imported{' '}
                  </li>
                  <li>
                    Add the styling for the links into the NavLink opening tag
                    in the className attribute by using the isActive element
                  </li>
                  <li>
                    Add the path the NavLink is redirecting to with the{' '}
                    <b>to</b> attribute.
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
      </div>
    </div>
  );
}

export default App;
