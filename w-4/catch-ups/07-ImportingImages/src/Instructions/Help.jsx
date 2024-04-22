function Help() {
  return (
    <div className='block1'>
      <h2>Need help?</h2>
      <div className='buttons'>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://create-react-app.dev/docs/adding-images-fonts-and-files/'
        >
          Adding images
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/writing-markup-with-jsx'
        >
          JSX
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/javascript-in-jsx-with-curly-braces'
        >
          Injecting JSX
        </a>
      </div>
    </div>
  );
}

export default Help;
