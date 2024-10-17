import './App.css'
import React, { useState } from 'react';
import Months from './months.jsx';
import Dates from './dates.jsx';
import Info from './info.jsx'
import Activities from './activities.jsx'
import {updateDateDisplay} from './updateDate.js'

function App() {
  const {dateDisplay, updateDate} = updateDateDisplay();

  return (
    <div id="P5R-calendar">
      <Activities />
      <Months onClick={updateDate} />
      <Info dateDisplay={dateDisplay} />
    </div>
  )
}

export default App
