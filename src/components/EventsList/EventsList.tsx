import React, { useEffect } from "react";

import { getEventsByDate } from "../../store/reducers/eventsSlice";
import { fetchEvents } from "../../store/actionCreators/actionCreators";
import { useTypedDispatch, useTypedSelector } from "../../store/hooks";

import { Loader } from "../Loader";
import { Slider } from "./../Slider";
import { DailyEvents } from "./components/DailyEvents";

import styles from "./EventsList.module.scss";

export const EventsList = () => {
  const dispatch = useTypedDispatch();
  const { events, status, error } = useTypedSelector(getEventsByDate);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className={styles.listWrapper}>
      {status === "loading" && <Loader />}
      {!error && !events.length && <h1>No events yet!</h1>}
      {events.length ? (
        <Slider
          data={events}
          className={styles.eventsList}
          render={(data) => {
            return data.map((dailyEvents) => (
              <DailyEvents
                key={dailyEvents[0].date}
                dailyEvents={dailyEvents}
              />
            ));
          }}
        />
      ) : null}
      {error && <h1>{`${error?.name}: ${error?.message}`}</h1>}
    </div>
  );
};
