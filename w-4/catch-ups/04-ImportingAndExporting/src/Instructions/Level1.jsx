const Level1 = () => {
  return (
    <>
      <h4>Creating a component</h4>
      <ol>
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
        <li>
          In the <i>src/App.jsx</i> file, there is a div with id{' '}
          <b>"presentation-container"</b>:
          <ul>
            <li>
              We will create a component for that element, so copy the whole
              div.
            </li>
          </ul>
        </li>
        <li>
          Create a new folder in the <i>src</i>:
          <ul>
            <li>
              Call the folder <b>"Components"</b>
            </li>
            <li>
              All the files for the components that you create in your
              application will be inside this folder. It will keep your project
              organized.
            </li>
          </ul>
        </li>
        <li>
          Create a new file inside the <b>"Components"</b> folder:
          <ul>
            <li>
              Call the file <b>"Presentation.jsx"</b>
            </li>
            <li>
              Create a component inside the file:
              <ul>
                <li>
                  Create a function called <b>"Presentation"</b> with a
                  capitalize name (comoponents' names always need to be
                  capitalize)
                </li>
                <li>Inside create a return.</li>
                <li>
                  In the return paste the content of the div with id{' '}
                  <b>"presentation"</b> that you copied from <b>App()</b>
                  <ul>
                    <li>
                      Remember that multiline returns should be wrapped around
                      parenthesis
                    </li>
                    <li>
                      Remember that multiline returns should be wrapped around
                      by a parent HTML element (In this case, if you copied
                      correctly the div with id <b>"presentation"</b>, that is
                      the parent element wraping around all the lines)
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level1;
