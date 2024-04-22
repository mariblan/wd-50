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
          Card withing the <b>CardsContainer</b> component. They all have the
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
            <li>
              In the return add the code of the div with id <b>"card1"</b>
            </li>
            <li>Make sure you are exporting the component by default</li>
          </ul>
        </li>
        <li>
          Render the <b>OneCard</b> component into the <b>CardsContainer.jsx</b>{' '}
          return three times, one for each card:
          <ul>
            <li>
              Import the component at the top of the file following the
              importation format that we have done in previous activities
            </li>
            <li>
              In the return, comment out the code for the cards in the page.
            </li>
            <li>
              In the return, add the <b>OneCard</b> component as a self closing
              tag three times.
            </li>
          </ul>
        </li>
        <li>Now you are rendering the same card three times. To make this new component rehusable, instead of passing the same information over and over</li>
      </ol>
    </>
  );
};

export default Level2;
