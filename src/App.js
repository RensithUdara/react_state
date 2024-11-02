import './App.css';
import {useState} from 'react';

function App() {
  //let count = 0;

  const [count, serCount] = useState(0);

  const handleIncrement = () => {
    serCount(count + 1);
    //count ++;
  };

  return (
    <>
      {count}
      <br />
      <button onClick={handleIncrement}>+ Increment</button>
    </>
  );
}

export default App;
