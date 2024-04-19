const Level2 = () => {
  return (
    <>
      <h4>Exporting the component</h4>
      <ol>
        <li>
          Add <b>"export default"</b>:{' '}
          <ul>
            <li>
              In ES5 functions, do it in the same line you initiate your
              component, right before the function keyword.
            </li>
            <li>
              In ES6 functions, do it at the bottom of the file, outside your
              component, and add the name of your component right after (eg.: export default Presentation;)
            </li>
            <li>You are ready to use this component</li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level2;
