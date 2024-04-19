import { useState } from 'react';
import Level1 from './Level1';
import Level2 from './Level2';
import Level3 from './Level3';

const Instructions = () => {
  const [activeComponent, setActiveComponent] = useState(1);

  const componentMap = {
    1: <Level1 />,
    2: <Level2 />,
    3: <Level3 />,
  };

  const handleNext = () => {
    setActiveComponent((prevComponent) =>
      prevComponent < 4 ? prevComponent + 1 : prevComponent
    );
  };

  const handleBack = () => {
    setActiveComponent((prevComponent) =>
      prevComponent > 1 ? prevComponent - 1 : prevComponent
    );
  };

  return (
    <div className='block'>
      <h3>
        Level {activeComponent} / {Object.keys(componentMap).length}
      </h3>
      <div className='levels example'>
        <button onClick={handleBack} hidden={activeComponent === 1}>
          {`< Level ${activeComponent - 1}`}
        </button>
        <button
          onClick={handleNext}
          hidden={activeComponent === Object.keys(componentMap).length}
        >
          {`Level ${activeComponent + 1} >`}
        </button>
      </div>
      {componentMap[activeComponent]}
    </div>
  );
};

export default Instructions;
