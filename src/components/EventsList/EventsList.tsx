import React, { useEffect } from "react";

import { useTypedDispatch, useTypedSelector } from "../../store/hooks";
import { fetchEvents, getAllEvents } from "../../store/reducers/eventsSlice";

import { Slider } from "./../Slider";
import { DailyEvents } from "./components/DailyEvents";

import styles from "./EventsList.module.scss";

export const EventsList = () => {
  const dispatch = useTypedDispatch();
  const { events, status, error } = useTypedSelector(getAllEvents);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return error ? (
    <h1>{error.message || "Unexpected exception!"}</h1>
  ) : status === "loading" ? (
    <h1>Loading!</h1>
  ) : !events.length ? (
    <h1>No events yet!</h1>
  ) : (
    <Slider
      data={events}
      className={styles.eventsList}
      render={(data) =>
        data.map((dailyEvents) => (
          <DailyEvents key={dailyEvents[0].date} dailyEvents={dailyEvents} />
        ))
      }
    />
  );
};
