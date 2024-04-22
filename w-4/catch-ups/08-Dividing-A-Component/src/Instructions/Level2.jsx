const Level2 = () => {
  return (
    <>
      <h4>Dividing Components by repeated patterns</h4>
      <ol>
        <li>
          Another way to know when to divide a component is when you see a
          pattern that is repeated in the code. In that way, you can create a
          new component that will be reused in different parts of the
          application. A good example of this, is the code for each individual
          Card withing the <b>CardContainer</b> component. They all have the
          same structure, but different content.
        </li>
        <li>
          Let's notice the pattern in the code of the cards and create a new
          component for them:
          <ul>
            <li>
              Create a new file named{' '}
              <b>
                <i>OneCard.jsx</i>
              </b>
            </li>
            <li>Create a functional component with the same name inside it</li>
            <li>In the return add the code of the div with id <b>"card1"</b></li>
            <li>Make sure you are exporting the component by default</li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level2;
