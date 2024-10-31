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
import { updateActivityDisplayDateList } from './hooks/updateActivities.js'
import { updateWeekdayDisplay } from './hooks/updateWeekday.js';
import { updateActivityStartDisplay } from './updateActivitiesStart.js';

function App() {
  const {dateDisplay, updateDate} = updateDateDisplay();
  const {weekdayDisplay, updateWeekday} = updateWeekdayDisplay();
  const {activityStartList, updateActivityStart} = updateActivityStartDisplay();
  const {activityListDay, updateActivityDay} = updateActivityDisplayDay();
  const {activityListNight, updateActivityNight} = updateActivityDisplayNight();
  const {activityListAuto, updateActivityAuto} = updateActivityDisplayAuto();
  const {activityListDates, updateActivityDates} = updateActivityDisplayDateList();

  return (
    <div id="P5R-calendar">
      <Activities
        onClick={updateDate}
        activitiesUpdateDay={updateActivityDay}
        activitiesUpdateNight={updateActivityNight}
        activitiesUpdateAuto={updateActivityAuto}
        activitiesDateList={updateActivityDates}
        weekdayUpdate={updateWeekday}
        activitiesStartUpdate={updateActivityStart}
      />
      <Months
        onClick={updateDate}
        activitiesUpdateDay={updateActivityDay}
        activitiesUpdateNight={updateActivityNight}
        activitiesUpdateAuto={updateActivityAuto}
        activitiesDateList={updateActivityDates}
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
        activityDisplayDates={activityListDates}
      />
    </div>
  )
}

export default App
