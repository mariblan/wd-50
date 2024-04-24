const SuperButton = () => {
  const handleClick = () => {
    console.log('Button clicked');
  };
  
  return <button onClick={() => console.log("Button clicked")}>Change me</button>;
};

export default SuperButton;
