import React from "react";

import { Slider } from "./../Slider/index";
import { useTypedSelector } from "../../store/hooks";
import { getAllEvents } from "../../store/reducers/eventsSlice";
import { DailyEvents } from "./components/DailyEvents/index";

import styles from "./EventsList.module.scss";

export const EventsList = () => {
  let specialContent = null;
  const allEvents = useTypedSelector(getAllEvents);

  const eventsList = allEvents.map((dailyEvents) => (
    <DailyEvents key={dailyEvents[0].date} dailyEvents={dailyEvents} />
  ));

  if (!eventsList.length) {
    specialContent = <h1>No events yet!</h1>;
  }

  return specialContent ? (
    <ul className={styles.eventsList}>{specialContent}</ul>
  ) : (
    <Slider list={eventsList} className={styles.eventsList} />
  );
};
