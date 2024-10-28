import './App.css'
import React, { useState } from 'react';
import Months from './components/months.jsx';
import Dates from './components/dates.jsx';
import Info from './components/info.jsx'
import Activities from './components/activities.jsx'
import { updateDateDisplay } from './hooks/updateDate.js'
import { updateActivityDisplay } from './hooks/updateActivities.js'
import { updateWeekdayDisplay } from './hooks/updateWeekday.js';
import { updateActivityStartDisplay } from './updateActivitiesStart.js';

function App() {
  const {dateDisplay, updateDate} = updateDateDisplay();
  const {weekdayDisplay, updateWeekday} = updateWeekdayDisplay();
  const {activityStartList, updateActivityStart} = updateActivityStartDisplay();
  const {activityList, updateActivity} = updateActivityDisplay();

  return (
    <div id="P5R-calendar">
      <Activities
        onClick={updateDate}
        activitiesUpdate={updateActivity}
        weekdayUpdate={updateWeekday}
      />
      <Months
        onClick={updateDate}
        activitiesUpdate={updateActivity}
        weekdayUpdate={updateWeekday}
        activitiesStartUpdate={updateActivityStart}
      />
      <Info
        dateDisplay={dateDisplay}
        weekdayDisplay={weekdayDisplay}
        activityStartDisplay={activityStartList}
        activityDisplay={activityList}
      />
    </div>
  )
}

export default App
