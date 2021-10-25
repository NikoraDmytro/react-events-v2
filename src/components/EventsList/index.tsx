import React, { useEffect } from "react";

import { Slider } from "./../Slider/index";
import { useTypedDispatch, useTypedSelector } from "../../store/hooks";
import { fetchEvents, getAllEvents } from "../../store/reducers/eventsSlice";
import { DailyEvents } from "./components/DailyEvents/index";

import styles from "./EventsList.module.scss";

export const EventsList = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  let specialContent = null;
  const { events: allEvents, status, error } = useTypedSelector(getAllEvents);

  const eventsList = allEvents.map((dailyEvents) => (
    <DailyEvents key={dailyEvents[0].date} dailyEvents={dailyEvents} />
  ));

  if (status === "loading") {
    specialContent = <h1>Loading!</h1>;
  } else if (!eventsList.length) {
    specialContent = <h1>No events yet!</h1>;
  }
  if (status === "failed" && error) {
    alert(error.message);
    console.log(error);
  }

  return specialContent ? (
    <div>{specialContent}</div>
  ) : (
    <Slider list={eventsList} className={styles.eventsList} />
  );
};
