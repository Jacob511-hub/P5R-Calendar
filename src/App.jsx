import './App.css'
import React from 'react';
import { InfoProvider } from './components/CalendarContext';
import Months from './components/months';
import Info from './components/info'
import Activities from './components/activities'

function App() {
  return (
    <InfoProvider>
      <div id="P5R-calendar">
        <Activities />
        <Months />
        <Info />
      </div>
    </InfoProvider>
  );
}

export default App
