// import ExampleOutcome from './ExampleOutcome';

function Explanation() {
  return (
    <div className='block1'>
      <div className='goal'>
        <h2>React: Conditional Rendering</h2>
        <p>
          React is a library for rendering <b>user interfaces</b> (UI). This{' '}
          <b>UI</b> are called <b>React Components</b>. React Components are the
          building blocks of a React application.
        </p>
        <p>
          React Components are reusable and can be imported and exported from
          one file to another. This allows you to use the same component in
          multiple parts of your application.
        </p>
        <p>
          In this exercise, you will learn how to conditionally render a React
          component. You will also learn how to render a component in another
          component.
        </p>

        <p className='goal-text'>
          <b>Your goal</b>: Render a component conditionally.
        </p>

        {/* <ExampleOutcome /> */}
      </div>
    </div>
  );
}

export default Explanation;
