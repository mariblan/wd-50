// import ExampleOutcome from './ExampleOutcome';

function Explanation() {
  return (
    <div className='block1'>
      <div className='goal'>
        <h2>React: Images</h2>
        <p>
          React is a library for rendering <b>user interfaces</b> (UI). This{' '}
          <b>UI</b> are called <b>React Components</b>. React Components are the
          building blocks of a React application.
        </p>
        <p>
          To use images on the web, you just use the link to the website in the
          src, as in a vanilla HTML/JS website. However, for images withing your
          own directory, they will have to be imported to be able to use them.
          In this catch-up, you will learn how to import images in a React
          application.
        </p>

        <p className='goal-text'>
          <b>Your goal</b>: Importing images and rendering them in a component.
        </p>

        {/* <ExampleOutcome /> */}
      </div>
    </div>
  );
}

export default Explanation;
