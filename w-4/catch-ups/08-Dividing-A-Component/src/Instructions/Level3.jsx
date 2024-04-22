const Level3 = () => {
  return (
    <>
      <h4>IPassing props to render conditially</h4>
      <ol>
        <li>
          At the top of the <b>CardsContainer</b> component, create three
          variables:
          <ul>
            <li>card1</li>
            <li>card2</li>
            <li>card3</li>
          </ul>
        </li>
        <li>
          Each variable is going to hold an object with the following keys:
          <ul>
            <li>
              <b>title</b> : The name of the student
            </li>
            <li>
              <b>description</b> : A short description of the student
            </li>
            <li>
              <b>image</b> : The path to the image of the student
            </li>
          </ul>
        </li>
        
      </ol>
    </>
  );
};

export default Level3;
