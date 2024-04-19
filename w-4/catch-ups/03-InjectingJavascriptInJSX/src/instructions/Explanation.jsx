// import ExampleOutcome from './ExampleOutcome';

function Explanation() {
  return (
    <div className='block1'>
      <div className='goal'>
        <h2>React: Injecting Javascript in JSX</h2>
        <p>
          React is a library for rendering <b>user interfaces</b> (UI). This{' '}
          <b>UI</b> are called <b>React Components</b>. React Components are the
          building blocks of a React application. They are reusable and can be a
        </p>
        <p>
          React Components are written in <b>JSX</b>, a syntax extension for the
          JavaScript language. JSX allows you to write HTML elements in
          JavaScript and place them in the DOM without using functions like{' '}
          <b>createElement</b> or <b>appendChild</b>.
        </p>
        <p>
          JSX is a powerful tool that allows you to inject JavaScript
          expressions. You can use JavaScript expressions inside JSX by wrapping
          them in curly braces <b>{`{}`}</b>.
        </p>
        <p className='goal-text'>
          <b>Your goal</b>: Inject javascript variables and logic into JSX.
        </p>

        {/* <ExampleOutcome /> */}
      </div>
    </div>
  );
}

export default Explanation;
