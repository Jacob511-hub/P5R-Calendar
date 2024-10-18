import './App.css'
import React, { useState } from 'react';
import Months from './components/months.jsx';
import Dates from './components/dates.jsx';
import Info from './components/info.jsx'
import Activities from './components/activities.jsx'
import {updateDateDisplay} from './hooks/updateDate.js'

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
