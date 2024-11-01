import './App.css'
import React, { useState } from 'react';
import Months from './components/months.jsx';
import Info from './components/info.jsx'
import Activities from './components/activities.jsx'
import { useUpdateInfo } from './hooks/updateInfo.js';

function App() {
  const {
    dateDisplay,
    updateDate,
    weekdayDisplay,
    updateWeekday,
    activityStartList,
    updateActivityStart,
    activityListDay,
    updateActivityDay,
    activityListNight,
    updateActivityNight,
    activityListAuto,
    updateActivityAuto,
    activityListDates,
    updateActivityDates,
    dateAvailability,
    updateDateAvailability,
  } = useUpdateInfo();

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
        dateAvailabilityUpdate={updateDateAvailability}
      />
      <Months
        onClick={updateDate}
        activitiesUpdateDay={updateActivityDay}
        activitiesUpdateNight={updateActivityNight}
        activitiesUpdateAuto={updateActivityAuto}
        activitiesDateList={updateActivityDates}
        weekdayUpdate={updateWeekday}
        activitiesStartUpdate={updateActivityStart}
        dateAvailabilityUpdate={updateDateAvailability}
      />
      <Info
        dateDisplay={dateDisplay}
        weekdayDisplay={weekdayDisplay}
        activityStartDisplay={activityStartList}
        activityDisplayDay={activityListDay}
        activityDisplayNight={activityListNight}
        activityDisplayAuto={activityListAuto}
        activityDisplayDates={activityListDates}
        dateAvailability={dateAvailability}
      />
    </div>
  )
}

export default App
