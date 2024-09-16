import React, { useEffect } from 'react';

const Grid = ({ size, grid, onInputChange }) => {
  useEffect(() => {
    onInputChange(Array(size).fill().map(() => Array(size).fill(0)));
  }, [size, onInputChange]);

  const handleChange = (row, col, value) => {
    const newGrid = grid.map((r, i) => r.map((v, j) => (i === row && j === col ? value : v)));
    onInputChange(newGrid);
  };

  return (
    <div>
      {grid.map((row, i) => (
        <div key={i} className="grid-row">
          {row.map((value, j) => (
            <input
              key={j}
              type="number"
              value={value}
              onChange={(e) => handleChange(i, j, Number(e.target.value))}
              className="grid-cell"
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
