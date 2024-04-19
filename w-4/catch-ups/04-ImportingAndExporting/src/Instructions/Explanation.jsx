// import ExampleOutcome from './ExampleOutcome';

function Explanation() {
  return (
    <div className='block1'>
      <div className='goal'>
        <h2>React: Importing and Exporting</h2>
        <p>
          React is a library for rendering <b>user interfaces</b> (UI). This{' '}
          <b>UI</b> are called <b>React Components</b>. React Components are the
          building blocks of a React application. They are reusable and can be a
        </p>
        <p>
            React Components are reusable and can be imported and exported from
            one file to another. This allows you to use the same component in
            multiple parts of your application.
        </p>
        <p>
          In this exercise, you will learn how to import and export React
          components. You will also learn how to render a component in another
          component.
        </p>

        <p className='goal-text'>
          <b>Your goal</b>: Import and render a React component in another.
        </p>

        {/* <ExampleOutcome /> */}
      </div>
    </div>
  );
}

export default Explanation;
