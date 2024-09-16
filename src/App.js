import React, { useState } from 'react';
import Grid from './Grid';
import { tspBruteForce } from './tsp';
import './App.css'; // Import the CSS file

const App = () => {
  const [size, setSize] = useState(4);
  const [grid, setGrid] = useState(Array(4).fill().map(() => Array(4).fill(0)));
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const { shortestPath, minLength } = tspBruteForce(grid);
    const adjustedPath = shortestPath ? shortestPath.map(node => node + 1) : [];
    setResult({ shortestPath: adjustedPath, minLength });
  };

  const handleSizeChange = (e) => {
    const newSize = Number(e.target.value);
    setSize(newSize);
    setGrid(Array(newSize).fill().map(() => Array(newSize).fill(0)));
  };

  return (
    <div className="container">
      <h1>Traveling Salesman Problem</h1>
      <label>
        Grid Size:
        <input
          type="number"
          min="2"
          value={size}
          onChange={handleSizeChange}
        />
      </label>
      <Grid size={size} grid={grid} onInputChange={setGrid} />
      <button className="btn" onClick={handleCalculate}>Find Shortest Path</button>
      {result && (
        <div>
          <h3>Result</h3>
          <p>Shortest Path: {result.shortestPath.join(' -> ')}</p>
          <p>Minimum Length: {result.minLength}</p>
        </div>
      )}
    </div>
  );
};

export default App;
