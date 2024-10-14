import './App.css'
import Months from './months.jsx';
import Dates from './dates.jsx';

function App() {
  return (
    <div className="calendar">
      <Months />
      <div className="grid-container">
        <Dates />
      </div>
    </div>
  )
}

export default App
