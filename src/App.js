import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [position, setPosition] = useState({
    x: 0,
    y: 5,
  });
  const [numbers, setNumbers] = useState([1, 2, 3, 4]);

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

  const handlePosition = () => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      x: 4,
    }));
  };

  const handleIArray = () => {
    const arr = numbers.map((num) => {
      return num * 2;
    });
    setNumbers(arr);
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
      <div className="position-display">
        <p>x: {position.x}</p>
        <p>y: {position.y}</p>
        <button onClick={handlePosition}>Update Position</button>
      </div>
      <div>
        <button onClick={handleIArray}>Update Array</button>
      </div>
      <div className="array-display">
        <h2>Updated Array:</h2>
        <ul>
          {numbers.map((num, index) => (
            <li key={index}>Value {index + 1}: {num}</li>
          ))}
        </ul>
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
