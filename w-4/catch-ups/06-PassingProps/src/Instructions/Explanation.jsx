// import ExampleOutcome from './ExampleOutcome';

function Explanation() {
  return (
    <div className='block1'>
      <div className='goal'>
        <h2>React: Props</h2>
        <p>
          React is a library for rendering <b>user interfaces</b> (UI). This{' '}
          <b>UI</b> are called <b>React Components</b>. React Components are the
          building blocks of a React application.
        </p>
        <p>
          Passing props is a way to pass data from a parent component to a child
          component. This way, you can make your components more dynamic and
          reusable.
        </p>

        <p className='goal-text'>
          <b>Your goal</b>: Passing props from <b>App()</b> to{' '}
          <b>Presentation()</b>.
        </p>

        {/* <ExampleOutcome /> */}
      </div>
    </div>
  );
}

export default Explanation;
