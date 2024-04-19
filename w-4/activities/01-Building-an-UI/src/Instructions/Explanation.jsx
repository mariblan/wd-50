// import ExampleOutcome from "./ExampleOutcome";

function Explanation() {
  return (
    <div className="block1">
      <div className='goal'>
        <h1>React: Building an UI</h1>
        <p>
          React is a library for rendering <b>user interfaces</b> (UI). It does
          so by taking over the rendering of the page with JavaScript. In
          addition, with React you are able to split the UI into{' '}
          <b>Components</b>, which allows greater flexibility and scalability in
          your applications. They can be as simple as a button, or as large as
          an entire page. Components are therefore the building blocks that
          compose an UI.
        </p>
        <b>Your goal</b>: Create and nest React Components to display your UI.
        {/* <ExampleOutcome /> */}
      </div>
    </div>
  );
}

export default Explanation;
