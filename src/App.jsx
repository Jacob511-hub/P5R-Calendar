import './App.css'
import React from 'react';
import { InfoProvider } from './components/CalendarContext';
import Months from './components/months';
import Info from './components/info'
import Activities from './components/activities'
import Legend from './components/Legend'
import Filter from './components/Filter';

function App() {
  return (
    <InfoProvider>
      <div id="P5R-calendar">
        <Activities />
        <Months />
        <Info />
        <Legend />
        <Filter />
      </div>
    </InfoProvider>
  );
}

export default App
