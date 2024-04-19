const Level3 = () => {
  return (
    <>
      <h4>Inject a variable - object literals</h4>
      <ol>
        <li>
          In the <i>src/App.jsx</i> file, create a variable inside the{' '}
          <b>App()</b> component that holds all the information of the previous
          variables in an object literal.
          <ul>
            <li>
              The variable should be named <b>"person"</b>
            </li>
            <li>
              The variable shoud have the following properties:
              <ul>
                <li>
                  <b>name</b>: your name
                </li>
                <li>
                  <b>age</b>: your age
                </li>
                <li>
                  <b>city</b>: the city where you live
                </li>
                <li>
                  <b>cats</b>: an array with the names of your cats
                </li>
                <li>
                  <b>hobbys</b>: an array with your hobbys
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          Substitute the variables you have created in the previous levels with
          the properties of the <b>person</b> object.
          <ul>
            <li>
              To reach the value of a property of an object, you can use dot
              notation.
            </li>
            <li>
              To access the items of an array, you can use the index wrapped in
              a pair of square brackets. It also works for arrays inside
              objects.
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level3;
