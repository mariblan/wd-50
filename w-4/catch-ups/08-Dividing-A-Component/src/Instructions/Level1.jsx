const Level1 = () => {
  return (
    <>
      <h4>Dividing components by functionality</h4>
      <ol>
        <li>
          In react, it is a good practice to divide a component into smaller
          components by functionality. In that way, each functionality will be
          isolated and can be reused in other parts of the application. For
          that, let's divide the Presentation component into two smaller
          components:
          <ul>
            <li>The Navbar component</li>
            <li>The CardsContainer component</li>
          </ul>
        </li>
        <li>
          Create a new file named{' '}
          <b>
            <i> Navbar.jsx</i>
          </b>{' '}
          inside the component folder
          <ul>
            <li>
              Cut the code of the navbar element in the <b>Presentation</b>{' '}
              component.
            </li>
            <li>
              Create a new funtional component inside the{' '}
              <b>
                <i>Navbar.jsx</i>
              </b>{' '}
              named <b>Navbar</b>
            </li>
            <li>
              Paste the information you cut from the <b>Presentation</b>{' '}
              component into the return of your new <b>Navbar</b> component
            </li>
            <li>Make sure you are exporting the component by default</li>
          </ul>
        </li>
        <li>
          Create a new file named{' '}
          <b>
            <i>CardsContainer.jsx</i>
          </b>{' '}
          inside the component folder
          <ul>
            <li>
              Cut the code of the element with id <b>"cardsContainer"</b> inside
              the <b>Presentation</b> component.
            </li>
            <li>
              Create a new funtional component inside the{' '}
              <b>
                <i>CardsContainer.jsx</i>
              </b>{' '}
              named <b>CardsContainer</b>
            </li>
            <li>
              Paste the information you cut from the <b>Presentation</b>{' '}
              component into the return of your new <b>CardsContainer</b>{' '}
              component
            </li>
            <li>Make sure you are exporting the component by default</li>
          </ul>
        </li>
        <li>
          Import both of the components that you have just created into the{' '}
          <b>Presentation</b> component.
        </li>
        <li>
          Use the components you have just imported inside the return of the{' '}
          <b>Presentation</b> component (Make sure to do it in the same place
          where the blocks of code you pasted in each component where rendering
          before).
        </li>
      </ol>
    </>
  );
};

export default Level1;
