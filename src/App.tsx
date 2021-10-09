import React from "react";
import styles from "./App.module.scss";

function App() {
  const renderEvent = (number: number) => (
    <li>
      <span>Custom {number}</span>
      <input type="date" defaultValue="22.05.2019" />
      <input type="time" defaultValue="09:00" />
      <input type="time" defaultValue="12:00" />
      <img src="img/edit.png" alt="Edit" />
      <img src="img/close.png" alt="Delete" />
    </li>
  );

  const renderEventsForDay = () => {
    const eventsForDay = [];

    for (let i = 0; i < 6; i++) {
      eventsForDay.push(renderEvent(i + 1));
    }

    return (
      <li className={styles.dailyEvents}>
        <p className={styles.eventsDate}>22.05.2019</p>
        <ul className={styles.EventsForDayList}>{eventsForDay}</ul>
      </li>
    );
  };

  const renderDailyEvents = () => {
    const dailyEvents = [];

    for (let i = 0; i < 3; i++) {
      dailyEvents.push(renderEventsForDay());
    }

    return <ul className={styles.dailyEventsList}>{dailyEvents}</ul>;
  };

  return (
    <div className="App">
      <div>{renderDailyEvents()}</div>
    </div>
  );
}

export default App;
