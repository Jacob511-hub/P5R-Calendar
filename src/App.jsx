import "./App.css";
import React, { useState } from "react";
import Months from "./components/months";
import Dates from "./components/dates.jsx";
import Info from "./components/info.jsx";
import Activities from "./components/activities.jsx";
import { updateDateDisplay } from "./hooks/updateDate.js";
import { updateActivityDisplay } from "./hooks/updateActivities.js";
import { updateWeekdayDisplay } from "./hooks/updateWeekday.js";
import { updateActivityStartDisplay } from "./updateActivitiesStart.js";

//! common practice to omit .jsx for component imports as it is not necessary
//! clean up unused imports

/**
 ! React hooks should begin with "use" (e.g., useState, useEffect) to clearly indicate they are hooks. This is a standard React naming convention that helps developers identify hooks. Not only that, it is also a requirement for ESLint's react-hooks/rules-of-hooks rule if you are using EsLint (which I recommend).
 */

function App() {
  const { dateDisplay, updateDate } = updateDateDisplay();
  const { weekdayDisplay, updateWeekday } = updateWeekdayDisplay();
  const { activityStartList, updateActivityStart } =
    updateActivityStartDisplay();
  const { activityList, updateActivity } = updateActivityDisplay();

  /*
    ! Here is where something like React Context becomes valuable. Instead of passing down props through multiple components, you can use Context to provide a value to all components in the tree without having to pass it down manually. This can help reduce the complexity of your components and make your code easier to maintain. If you create a Context Provider for Dates, Activities, Weekdays and ActivityStart you can create a Provider tree something like this: 
    <Dates.Provider> 
        <Activities.Provider> 
            <Weekdays.Provider> 
                <ActivityStart.Provider> 
                  <Activities />
                  <Months />
                  <Info />
                </ActivityStart.Provider> 
            </Weekdays.Provider> 
        </Activities.Provider> 
    </Dates.Provider> 
    ! and then you can access the values in any component in the tree without having to pass them down manually. This can help reduce the complexity of your components and make your code easier to maintain. Each context file would need to create the context with React.createContext() and export the Provider and Consumer components (ie: useDateContext, etc.) and then you should be able to use and set the values in any component in the tree using that consumer component.

    ! As we talked about before, this is very helpful as a Project grows and you have more and more components that need to access the same data. It can help reduce the complexity of your components and make your code easier to maintain. If there is a piece of state that is not required by many components, then it is fine to pass it down as a prop. But if it is required by many components, then using Context can be a better solution.
  */
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
  );
}

export default App;
