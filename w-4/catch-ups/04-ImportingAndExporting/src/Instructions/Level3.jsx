const Level3 = () => {
  return (
    <>
      <h4>Importing and Rendering the Component</h4>
      <ol>
        <li>
          Go to the <i>App.jsx</i> file
        </li>
        <li>
          Import our component <b>"Presentation"</b> on the top of the file
          (imports should always be at the top of the file)
          <ul>
            <li>
              Initiate the import with the keyword <b>"import"</b>
            </li>
            <li>
              Add the name of the component you are importing (this time is{' '}
              <b>Presentation</b>)
            </li>
            <li>
              Add the keyword <b>from</b>
            </li>
            <li>
              Add the relative path to your components file between quotations
              after the keyword from (eg.: "./Presentation"){' '}
            </li>
            <li>
              At the end, your import line should look like this:
              <ul>
                <li>
                  <b>import Presentation from './components/Presentation';</b>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Render the component in the return of the <b>App()</b>, where the
          previouse div with id <b>"presentation"</b> was in{' '}
          <ul>
            <li>Create a self closing tag inside the return</li>
            <li>
              Put the name of to the component inside that tag, but be aware
              that you need to leave a space between the name of the component
              and the "/" or it will create and error
            </li>
            <li>
              Your line should be
              <ul>
                <li>
                  <b>{'<Presentation />'}</b>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level3;
