import { useState, useEffect } from 'react';
import './App.css';
import DisplayMeme from './components/DisplayMeme';
import Buttons from './components/Buttons';
import Form from './components/Form';

function App() {
  // Showcase the meme
  const [memes, setMemes] = useState([]);
  const [meme, setMeme] = useState(null);
  const [pageNumber, setPageNumber] = useState(0);

  // Text and style
  const [text, setText] = useState('');
  const [style, setStyle] = useState({
    color: 'black',
    fontSize: '18px',
    position: 'absolute',
  });
  
  const [memeTexts, setMemeTexts] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          setMemes(data.data.memes);
        }
      });
  }, []);

  useEffect(() => {
    memes.length > 0 &&
      setMeme(
        memes.find((meme, index) => {
          if (index === pageNumber) {
            return meme;
          }
        })
      );
  }, [memes, pageNumber]);

  return (
    <div className='app'>
      <h1>Meme Generator</h1>
      <div className='memeCreator'>
        <Form
          text={text}
          setText={setText}
          style={style}
          setStyle={setStyle}
          memeTexts={memeTexts}
          setMemeTexts={setMemeTexts}
        />
        <div className='memeContainer'>
          <Buttons
            memes={memes}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
          />
          {meme && (
            <DisplayMeme
              meme={meme}
              memeTexts={memeTexts}
              setMemeTexts={setMemeTexts}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
