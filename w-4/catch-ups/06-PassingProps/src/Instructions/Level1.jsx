const Level1 = () => {
  return (
    <>
      <h4>Passing props</h4>
      <ol>
        <li>
          Inside the folder name Components, you have the <b>Presentation</b>{' '}
          component. In there, there is now some information that is input in
          the text directly. You need to change that so that the information is
          passed as props.
        </li>
        <li>
          Go to the <b>App</b> component and pass the information as props to
          the <b>Presentation</b> component.
          <ul>
            <li>
              To do this, inside the self cosing tag of the Presentation
              component, give the prop an attribute named <b>firstName</b>
              <ul>
                <li>
                  It should have the value <b>"Ana"</b>
                </li>
                <li>
                  I should look like this {`<Presentation firstName="Ana" />`}
                </li>
              </ul>
            </li>
            <li>
              Repeat the same for the:
              <ul>
                <li>
                  <b>lastName</b> (value should be Smith)
                </li>
                <li>
                  <b>age</b> (value should be 30)
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          With this, we are setting the props for the <b>Presentation</b>{' '}
          component. Even if the information is given in the <b>App()</b>{' '}
          return, those attributes will be usable within the <b>Presentation</b>{' '}
          component, and you can use them as you would any other variable. Let's
          see how to do that in the next level.
        </li>
      </ol>
    </>
  );
};

export default Level1;
