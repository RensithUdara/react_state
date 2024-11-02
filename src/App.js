import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="app-container">
      <h1>Counter Example</h1>
      <div className="counter-display">{count}</div>
      <div className="button-group">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type something..."
        />
        <p className="input-display">You typed: {inputValue}</p>
      </div>
    </div>
  );
}

export default App;
