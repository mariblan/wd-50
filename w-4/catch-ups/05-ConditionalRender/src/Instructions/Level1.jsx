const Level1 = () => {
  return (
    <>
      <h4>Conditional rendering</h4>
      <ol>
        <li>
          Inside the folder name Components, you have the <b>Presentation</b>{' '}
          component you created in the previous exercise.
        </li>
        <li>
          At the top of the component,you have two variables{' '}
          <ul>
            <li>
              One called <b>"firstName"</b>
            </li>
            <li>
              One called <b>"lastName"</b>
            </li>
          </ul>
        </li>
        <li>
          Create a new variable called <b>"showName"</b> and set it to{' '}
          <b>true</b>.
        </li>
        <li>
          Create a new variable called <b>"showLastName"</b> and set it to{' '}
          <b>false</b>.
        </li>

        <li>
          Add an h1 into the page and inject the <b>"firstName"</b> and{' '}
          <b>"lastName"</b> variables in it (each variable will have to have
          their own set of curly brakets around them).
          <ul>
            <li>
              Add the the <b>"showName"</b> variables and the <b> && </b>{' '}
              operator in each injection (inside the brakets), right before the
              variables <b>"firstName"</b> and <b>"lastName"</b>
            </li>
          </ul>
        </li>
        <li>
          Add an h2 and inject the <b>"lastName"</b> variable in it
          <ul>
            <li>
              {' '}
              Add the the <b>"showLastName"</b> variables and the <b> && </b>{' '}
              operator in the injection (inside the brakets), right before the{' '}
              <b>"lastName"</b>
            </li>
          </ul>
        </li>
        <li>
          You can see now, that the <b>h1</b> element is rendering into the page
          while the <b>h2</b> is not. The conditional rendering can decide which
          elements in the JSX will be seen in the page by adding conditions. In
          this case, the <b>h1</b> will be rendered because the <b>showName</b>{' '}
          variable is set to <b>true</b> and the <b>h2</b> will not be rendered
          because the <b>showLastName</b> variable is set to <b>false</b>.{' '}
          <ul>
            <li>
              Change the value of <b>showName</b> to <b>false</b>
            </li>
            <li>
              Change the value of <b>showLastName</b> to <b>true</b>
            </li>
            <li>
              You can see that now, the <b>h1</b> is no longer visible but the{' '}
              <b>h2</b> is.
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level1;
