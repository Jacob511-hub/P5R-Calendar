import './App.css'
import Months from './months.jsx';

function App() {
  const rows = 5;
  const cols = 7;

  const tileSkewPattern = [
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
  ];

  const shadowSkewPattern = [
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
    [0, 9, 3, 8, 1, 10, 2],
    [8, 4, 7, 3, 7, 2, 9],
  ];

  const gridItems = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const tileSkewX = tileSkewPattern[row][col];
      const tileSkewY = tileSkewPattern[row][col];
      const shadowSkewX = shadowSkewPattern[row][col];
      const shadowSkewY = shadowSkewPattern[row][col];

      gridItems.push(
        <div key={`${row}-${col}`} className="grid-item">
          <div
            className="grid-tile"
            style={{
              transform: `skew(${tileSkewX}deg, ${tileSkewY}deg)`,
            }}
          ></div>
          <div
            className="grid-shadow"
            style={{
              transform: `skew(${shadowSkewX}deg, ${shadowSkewY}deg)`,
            }}
          ></div>
        </div>
      );
    }
  }

  return (
    <div className="calendar">
      <Months />
      <div className="grid-container">{gridItems}</div>
    </div>
  )
}

export default App
