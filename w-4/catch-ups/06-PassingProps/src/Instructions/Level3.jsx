const Level3 = () => {
  return (
    <>
      <h4>Passing props - variables and states</h4>
      <ol>
        <li>
          Go back to the <b>App()</b> and before the return, create variables
          for:
          <ul>
            <li>firstName: Ana</li>
            <li>lastName: Smith</li>
            <li>age: 30</li>
          </ul>
        </li>
        <li>
          Now, in the return of the <b>App()</b>, change the values you where
          adding in the attributes of the {`<Presentation />`} to be the
          variables instead of been just strings.
          <ul>
            <li>
              It should look like this{' '}
              {`<Presentation firstName={firstName} />`}
            </li>
          </ul>
        </li>
        <li>
          Now, your props is getting the value of the variable you passed down
          between the curly braces of the attribute's value. Change the value of
          the variables and see how the <b>Presentation</b> component changes.
        </li>
      </ol>
    </>
  );
};

export default Level3;
