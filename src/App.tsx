import React from "react";
import { EventsList } from "./components/EventsList";
import { AddEventForm } from './components/AddEventForm/index';

function App() {
  return (
    <div className="App">
      <EventsList />
      <AddEventForm />
    </div>
  );
}

export default App;
