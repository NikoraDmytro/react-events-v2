import React from "react";
import { EventsList } from "./components/EventsList";
import { EventForm } from "./components/EventForm";

function App() {
  return (
    <div className="App">
      <EventsList />
      <EventForm />
    </div>
  );
}

export default App;
