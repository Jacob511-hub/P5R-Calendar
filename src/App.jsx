import './App.css'
import React, { useState } from 'react';
import Months from './components/months.jsx';
import Dates from './components/dates.jsx';
import Info from './components/info.jsx'
import Activities from './components/activities.jsx'
import { updateDateDisplay } from './hooks/updateDate.js'
import { updateActivityDisplay } from './hooks/updateActivities.js'

function App() {
  const {dateDisplay, updateDate} = updateDateDisplay();
  const {activityList, updateActivity} = updateActivityDisplay();

  return (
    <div id="P5R-calendar">
      <Activities onClick={updateDate} />
      <Months onClick={updateDate} activitiesUpdate={updateActivity}/>
      <Info dateDisplay={dateDisplay} activityDisplay={activityList}/>
    </div>
  )
}

export default App
