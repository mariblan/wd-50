import React from 'react';

function Form({ text, setText, style, setStyle, setMemeTexts, memeTexts }) {
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleStyleChange = (event) => {
    setStyle({
      ...style,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setMemeTexts([...memeTexts, { text, style }]);
    setStyle({});
    setText('');
  };
  console.log(memeTexts);
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <h3>Add some text</h3>
      <div>
        <div>
          <label htmlFor='text'>Text</label>
          <input
            onChange={handleTextChange}
            type='text'
            id='text'
            name='text'
            placeholder='text'
          />
        </div>
        <div>
          <label htmlFor='color'>Color</label>
          <select onChange={handleStyleChange} name='color' id='color'>
            <option value='black'>Black</option>
            <option value='white'>White</option>
            <option value='red'>Red</option>
            <option value='blue'>Blue</option>
          </select>
        </div>
        <div>
          <label htmlFor='fontSize'>Font Size</label>
          <select onChange={handleStyleChange} name='fontSize' id='fontSize'>
            <option value='18px'>Small</option>
            <option value='24px'>Medium</option>
            <option value='36px'>Large</option>
          </select>
        </div>
      </div>
      <button>Save</button>
    </form>
  );
}

export default Form;
