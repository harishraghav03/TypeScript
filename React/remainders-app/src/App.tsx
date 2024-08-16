import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Remainder from './models/remainder';
import reminderService from './services/remainder';
import remainder from './services/remainder';

function App() {
  // To properly store remainders in that component -> Generic (The object we wanna store)
  const [reminders, setReminders] = useState<Remainder[]>([]);  // Array destructuring

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const remainder = await reminderService.getRemainders();
    setReminders(remainder);
  }

  return (
    <div className="App">
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
