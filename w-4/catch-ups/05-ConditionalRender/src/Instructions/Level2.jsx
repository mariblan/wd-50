const Level2 = () => {
  return (
    <>
      <h4>Conditional Render with State</h4>
      <ol>
        <li>
          Import the hook useState{' '}
          <ul>
            <li>{`import {useState} from "react"`}</li>
          </ul>
        </li>
        <li>
          Change the <b>showName</b> variable to be a state variable and set its
          initial value to <b>true</b>
          <ul>
            <li>
              The line will be like this:{' '}
              {`const [showName, setShowName] = useState(true)`}
            </li>
          </ul>
        </li>
        <li>
          Change the <b>showLastName</b> variable to be a state variable and set
          its initial value to <b>false</b>.
          <ul>
            <li>
              The line will be like this:{' '}
              {`const [showLastName, setShowLastName] = useState(true)`}
            </li>
          </ul>
        </li>
        <li>
          Here are two buttons in the return of the <b>Presentation</b>{' '}
          component, after the paragraph ends{' '}
          <ul>
            <li>
              Add an <b>onClick</b> event to each button and give them the value
              of an anonymouse function (eg.: {`onClick+{( ) => {}}`})
            </li>
            <li>
              Inside the function of the button <b>Show Name</b> add the
              following line: {`setShowName((prev) => !prev)`}. This will toggle
              the value of the state variable <b>showName</b> between{' '}
              <b>true</b> and <b>false</b>.
            </li>
            <li>
              Inside the function of the button <b>Show Last name</b> add the
              following line: {`setShowLastName((prev) => !prev)`}. This will
              toggle the value of the state variable <b>showLastName</b> between{' '}
              <b>true</b> and <b>false</b>.
            </li>
          </ul>
        </li>
        <li>
          Now click on the buttons and see how the text appears and disappears
          when you click them.
        </li>
      </ol>
    </>
  );
};

export default Level2;
