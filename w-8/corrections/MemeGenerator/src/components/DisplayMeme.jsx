import OneText from './OneText';

function DisplayMeme({ meme, memeTexts, setMemeTexts }) {
  return (
    <div className='displayMeme'>
      <img src={meme.url} alt={meme.name} />
      {memeTexts.map((memeText, index) => (
        <OneText key={index} memeText={memeText} />
      ))}
    </div>
  );
}

export default DisplayMeme;
