import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Remainder from './models/remainder';


const reminders: Remainder[] = [
  { id: 1, title: 'Remainder 1' }
];

function App() {
  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
