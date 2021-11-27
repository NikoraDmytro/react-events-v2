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

  const eventsList = events.map((dailyEvents) => (
    <DailyEvents key={dailyEvents[0].date} dailyEvents={dailyEvents} />
  ));

  const isLoading = status === "loading";
  const isFailed = status === "failed";
  const isEmpty = !eventsList.length;

  return isLoading ? (
    <h1>Loading!</h1>
  ) : isFailed ? (
    <h1>{error || "Unexpected exception!"}</h1>
  ) : isEmpty ? (
    <h1>No events yet!</h1>
  ) : (
    <Slider list={eventsList} className={styles.eventsList} />
  );
};
