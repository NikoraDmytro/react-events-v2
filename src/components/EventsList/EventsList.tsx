import React from "react";
import { Event } from "./Event";
import styles from "./Events.module.scss";

const DailyEvents = () => {
  const dailyEvents = [];

  for (let i = 0; i < 6; i++) {
    const event = <Event index={i + 1} />;
    dailyEvents.push(event);
  }

  return (
    <li className={styles.dailyEventsContainer}>
      <p className={styles.eventsDate}>22.05.2019</p>
      <ul className={styles.dailyEvents}>{dailyEvents}</ul>
    </li>
  );
};

export const EventsList = () => {
  const allEvents = [];

  for (let i = 0; i < 3; i++) {
    const dailyEvents = <DailyEvents />;

    allEvents.push(dailyEvents);
  }

  return <ul className={styles.eventsList}>{allEvents}</ul>;
};
