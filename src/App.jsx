import './App.css'
import React, { useState } from 'react';
import Months from './months.jsx';
import Dates from './dates.jsx';
import Info from './info.jsx'
import Activities from './activities.jsx'

function App() {
  const [dateDisplay, setDateDisplay] = useState("");

  const updateDate = (newDate) => {
      setDateDisplay(newDate);
  };

  return (
    <div id="P5R-calendar">
      <Activities />
      <Months onClick={updateDate} />
      <Info dateDisplay={dateDisplay} />
    </div>
  )
}

export default App
