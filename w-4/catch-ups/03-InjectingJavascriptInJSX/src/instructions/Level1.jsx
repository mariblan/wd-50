const Level1 = () => {
  return (
    <>
      <h4>Inject a variable - Primitive data</h4>
      <ol>
        <li>
          <li>
            Navigate to the folder <b>04-ImportingAndExporting</b> in your
            terminal and do the next commands
            <ul>
              <li>npm install</li>
              <li>
                npm run dev (wait for the installation to finish)
                <ul>
                  <li>Open the link in your terminal to see your react app</li>
                  <li>
                    To stop the app from running do <p>"ctrk" + "c"</p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          In the <i>src/App.jsx</i> file, create a variable inside the{' '}
          <b>App()</b> component that holds your name.
          <ul>
            <li>The variable should be created before the return keyword.</li>
            <li>
              The variableshoud be named <b>"myName"</b>
            </li>
          </ul>
        </li>
        <li>
          Inject the variable you have just created into the paragraph with id{' '}
          <b>"presentation"</b>:
          <ul>
            <li>Delete the name "Ana" from the paragraph</li>
            <li>
              Replace it with the variable you have just created (
              <b>"myName"</b>) wrapped in curly braces
            </li>
          </ul>
        </li>
        <li>
          Repeat step 2 and 3 for the following information in the p element
          with id <b>"presentation"</b>:
          <ul>
            <li>Age</li>
            <li>City</li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level1;
