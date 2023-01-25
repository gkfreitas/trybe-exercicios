import './App.css';

const message = () => {
  console.log('Click');
}

const message2 = () => {
  console.log('Click2');
}

const message3 = () => {
  console.log('Click3');
}

function App() {
  return (
    <>
      <button onClick={message}>Texto 1</button>
      <button onClick={message2}>Texto 2</button>
      <button onClick={message3}>Texto 3</button>
    </>
  );
}

export default App;
