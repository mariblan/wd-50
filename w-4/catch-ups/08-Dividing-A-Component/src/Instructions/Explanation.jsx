// import ExampleOutcome from './ExampleOutcome';

function Explanation() {
  return (
    <div className='block1'>
      <div className='goal'>
        <h2>React: Dividing-A-Component</h2>
        <p>
          React is a library for rendering <b>user interfaces</b> (UI). This{' '}
          <b>UI</b> are called <b>React Components</b>. React Components are the
          building blocks of a React application.
        </p>
        <p>
          In this exercise, you will learn how to divide a component into
          smaller components. This is a good practice to keep your code clean
          and organized, and to make it easier to maintain and debug. It will
          also help you to reuse code.
        </p>
        <p className='goal-text'>
          <b>Your goal</b>: Dividing the Presentation component into smaller
          chuncks of rehusable code.
        </p>

        {/* <ExampleOutcome /> */}
      </div>
    </div>
  );
}

export default Explanation;
