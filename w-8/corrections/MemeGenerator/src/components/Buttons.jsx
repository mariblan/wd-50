function Buttons({ pageNumber, setPageNumber, memes }) {
  const handleNext = () => {
    if (pageNumber < memes.length - 1) setPageNumber((prev) => prev + 1);
  };
  const handleBack = () => {
    if (pageNumber > 0) {
      setPageNumber((prev) => prev - 1);
    }
  };
  return (
    <div className='buttons'>
      <button onClick={handleBack} disabled={pageNumber > 0 ? false : true}>
        Back
      </button>
      <h3>{pageNumber + 1}</h3>
      <button
        onClick={handleNext}
        disabled={pageNumber < memes.length - 1 ? false : true}
      >
        Next
      </button>
    </div>
  );
}

export default Buttons;
