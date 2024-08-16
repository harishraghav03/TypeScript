import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Remainder from './models/remainder';
import reminderService from './services/remainder';
import NewReminder from './components/NewReminder';

function App() {
  // To properly store remainders in that component -> Generic (The object we wanna store)
  const [reminders, setReminders] = useState<Remainder[]>([]);  // Array destructuring

  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminder = await reminderService.getRemainders();
    setReminders(reminder);
  }

  const removeReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addRemainder(title);
    setReminders([newReminder, ... reminders]);
    
  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveRemainder={removeReminder}/>
    </div>
  );
}

export default App;
