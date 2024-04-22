const Level1 = () => {
  return (
    <>
      <h4>Adding Images</h4>
      <ol>
        <li>
          Inside the folder name Components, you have the <b>Presentation</b>{' '}
          component. In there, there is the presentation text from Ana Smith. We
          are lacking her profile picture though, so let's add it inside the div
          with the className <b>"cardImage"</b>.
          <ul>
            <li>
              Create an image tag inside the div (make sure you add the / to
              close it and also that there is an empty space between the tags
              name and the /, otherwise react will not render the tag).
            </li>
            <li>
              Add an <b>alt</b> attribute with the value <b>"Ana Smith"</b>
            </li>
            <li>
              Add the <b>src</b> attribute and pass the next link as its value:{' '}
              <b>
                https://shotkit.com/wp-content/uploads/bb-plugin/cache/cool-profile-pic-matheus-ferrero-landscape-6cbeea07ce870fc53bedd94909941a4b-zybravgx2q47.jpeg
              </b>
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
};

export default Level1;
