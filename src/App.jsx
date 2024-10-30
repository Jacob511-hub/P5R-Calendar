import './App.css'
import React, { useState } from 'react';
import Months from './components/months.jsx';
import Dates from './components/dates.jsx';
import Info from './components/info.jsx'
import Activities from './components/activities.jsx'
import { updateDateDisplay } from './hooks/updateDate.js'
import { updateActivityDisplayDay } from './hooks/updateActivities.js'
import { updateActivityDisplayNight } from './hooks/updateActivities.js'
import { updateActivityDisplayAuto } from './hooks/updateActivities.js'
import { updateWeekdayDisplay } from './hooks/updateWeekday.js';
import { updateActivityStartDisplay } from './updateActivitiesStart.js';

function App() {
  const {dateDisplay, updateDate} = updateDateDisplay();
  const {weekdayDisplay, updateWeekday} = updateWeekdayDisplay();
  const {activityStartList, updateActivityStart} = updateActivityStartDisplay();
  const {activityListDay, updateActivityDay} = updateActivityDisplayDay(); //Separate list into Day, Night, and Auto
  const {activityListNight, updateActivityNight} = updateActivityDisplayNight();
  const {activityListAuto, updateActivityAuto} = updateActivityDisplayAuto();

  return (
    <div id="P5R-calendar">
      <Activities
        onClick={updateDate}
        activitiesUpdateDay={updateActivityDay}
        activitiesUpdateNight={updateActivityNight}
        activitiesUpdateAuto={updateActivityAuto}
        weekdayUpdate={updateWeekday}
      />
      <Months
        onClick={updateDate}
        activitiesUpdateDay={updateActivityDay}
        activitiesUpdateNight={updateActivityNight}
        activitiesUpdateAuto={updateActivityAuto}
        weekdayUpdate={updateWeekday}
        activitiesStartUpdate={updateActivityStart}
      />
      <Info
        dateDisplay={dateDisplay}
        weekdayDisplay={weekdayDisplay}
        activityStartDisplay={activityStartList}
        activityDisplayDay={activityListDay}
        activityDisplayNight={activityListNight}
        activityDisplayAuto={activityListAuto}
      />
    </div>
  )
}

export default App
