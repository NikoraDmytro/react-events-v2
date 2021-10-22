import React from "react";
import { Event } from "./components/Event";
import styles from "./EventsList.module.scss";
import { Slider } from "./../Slider/index";
import { useTypedSelector } from "../../store/hooks";
import { format } from "date-fns";
import { EventWrapper } from "./components/EventWrapper";
import { getAllEvents } from "../../store/reducers/eventsSlice";

export const EventsList = () => {
  const allEvents = useTypedSelector(getAllEvents);

  const eventsList = allEvents.map((dailyEvents) => {
    const events = dailyEvents.map((event) => (
      <EventWrapper key={event.id} event={event}>
        {(props) => <Event {...props} />}
      </EventWrapper>
    ));

    const date = dailyEvents[0].date;

    return (
      <li key={date} className={styles.dailyEventsContainer}>
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
