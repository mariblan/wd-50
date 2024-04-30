import './App.css';
import profile from './assets/profile.jpeg';
import profile2 from './assets/profile2.jpeg';
import Card from './components/Card';

function App() {
  const name = 'Maria';
  const email = 'maria@gmail.com';
  const students = ["Maria", "Ana"];
  return (
    <>
      <h1>Hello</h1>
      <Card name='Ana' email='ana@gmail.com' src={profile} />
      <Card name={name} email={email} src={profile2} />
    </>
  );
}

export default App;
