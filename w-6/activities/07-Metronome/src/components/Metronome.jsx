//Go to the drive folder and add the two .wav files in there to the assets folder, then uncomment the lines below.
// import click1 from "../assets/click1.wav";

// const audioClick1 = new Audio(click1);

const Metronome = () => {
  return (
    <div className='metronome'>
      <div className='bpm-slider'>
        <div>BPM</div>
        <input type='range' min='60' max='240' step='1' />
      </div>
      <button>Start</button>
    </div>
  );
};

export default Metronome;
