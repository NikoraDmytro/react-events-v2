import React from "react";
import { Event } from "./Event";
import styles from "./EventsList.module.scss";
import { Slider } from "./../Slider/index";
import { useTypedSelector } from "../../store/hooks";
import { format } from "date-fns";

export const EventsList = () => {
  const allEvents = useTypedSelector((state) => state.events);

  const eventsList = Object.entries(allEvents).map(([date, dailyEvents]) => {
    const events = dailyEvents.map((event) => <Event event={event} />);

    return (
      <li className={styles.dailyEventsContainer}>
        <p className={styles.eventsDate}>
          {format(new Date(date), "dd.MM.yyyy")}
        </p>
        <ul className={styles.dailyEvents}>{events}</ul>
      </li>
    );
  });

  if (!eventsList.length) {
    return (
      <ul className={styles.eventsList}>
        <h1>No events yet</h1>
      </ul>
    );
  }

  return <Slider list={eventsList} className={styles.eventsList} />;
};
