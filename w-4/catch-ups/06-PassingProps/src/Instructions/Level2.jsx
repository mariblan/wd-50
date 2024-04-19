const Level2 = () => {
  return (
    <>
      <h4>Receiving props</h4>
      <ol>
        <li>
          The <b>App()</b> is passing the props to the <b>Presentation()</b>{' '}
          component. Now, you need to receive those props to be able to use
          them.
          <ul>
            <li>
              Go to the <b>Presentation</b> component and add the word{' '}
              <b>props</b> as an argument between the parenthesis of the
              Presentation function.
              <ul>
                <li>Eg.: {`funtion Presentation(props) `}</li>
              </ul>
            </li>
            <li>
              That has initiated our props object. This ojbect is receiving the
              information passed down to the <b>Presentation</b> in the return
              of <b>App()</b>
              <ul>
                <li>
                  Log the props object into the console to see what is there.
                </li>
                <li>
                  By using dot notation, log all the properties that you see in
                  the console of our props object.
                </li>
                <li>
                  Inject the same properties that you logged into the p element
                  whith id <b>"presentation"</b> where you can find the values:
                  "Ana", "Smith" and "30".
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Now your presentation component is using information that comes from
          the App() component. Information can only pass from parent to child,
          not the other way around.
        </li>
      </ol>
    </>
  );
};

export default Level2;
