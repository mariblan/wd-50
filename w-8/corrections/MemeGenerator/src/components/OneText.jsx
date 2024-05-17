function OneText({ memeText }) {
  console.log(memeText);
  return (
    <p style={memeText.style}>
      {memeText !== '' ? memeText.text : 'Insert Text'}
    </p>
  );
}

export default OneText;
