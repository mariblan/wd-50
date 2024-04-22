const Level2 = () => {
  return (
    <>
      <h4>Importing images</h4>
      <ol>
        <li>
          Now, if you go back to the browser, you should see Ana's profile
          picture. However, we are not done yet. The image is been added through
          a link on the web, but we also have the image in our assets folder. To
          use that one, first we need to import it.
          <ul>
            <li>Use the keyword import</li>
            <li>
              Give the picture a name under which you are going to store the
              relative path.
            </li>
            <li>Use the keyword from</li>
            <li>
              Pass the relative path of the picture to the file where you are
              using it between quotations
            </li>
            <li>
              It should look something like this:
              <div>
                <code>{`import profilePic from '../assets/profilePic.jpeg';`}</code>
              </div>
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level2;
