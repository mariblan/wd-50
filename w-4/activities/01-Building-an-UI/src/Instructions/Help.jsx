import React from 'react';

function Help() {
  return (
    <div className='block1'>
      <h2>Need help?</h2>
      <div className='buttons'>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/describing-the-ui'
        >
          Describing the UI
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/your-first-component'
        >
          React Components
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/importing-and-exporting-components'
        >
          Modules: Importing and Exporting Components
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/writing-markup-with-jsx'
        >
          Writing Markup with JSX
        </a>
        <a
          className='link'
          target='_blank'
          rel='noopener noreferrer'
          href='https://react.dev/learn/javascript-in-jsx-with-curly-braces'
        >
          JavaScript in JSX with Curly Braces
        </a>
      </div>
    </div>
  );
}

export default Help;
