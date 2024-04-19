const Level2 = () => {
  return (
    <>
      <h4>Inject a variable - arrays</h4>
      <ol>
        <li>
          In the <i>src/App.jsx</i> file, create a variable inside the{' '}
          <b>App()</b> component that holds a list of your hobbys.
          <ul>
            <li>
              The variable should be created right after the variables created
              in level 1.
            </li>
            <li>
              The variable shoud be named <b>"hobbys"</b>
            </li>
            <li>The variable should be an array of strings with 3 items.</li>
          </ul>
        </li>
        <li>
          Inject the first item of the hobbys array you have just created into
          the paragraph with id <b>"presentation"</b>:
          <ul>
            <li>
              Delete <b>"love to read books"</b>
            </li>
            <li>
              Replace it with the first item of the hobbys array wrapped in
              curly braces (remember to use the index to access the item in an
              array).
            </li>
          </ul>
        </li>
        <li>
          Repeat step 2 with the other two items of the array, but this time to
          replace:
          <ul>
            <li>
              <b>"travel to new places"</b>
            </li>
            <li>
              <b>"try new foods"</b>
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level2;
