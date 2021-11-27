import React from "react";
import { format } from "date-fns";

import { Event } from "../Event";
import { EventWrapper } from "../EventWrapper";

import { DailyEventsProps } from "../../../../shared/types/Props";

import styles from "./DailyEvents.module.scss";

export const DailyEvents = React.memo(({ dailyEvents }: DailyEventsProps) => {
  const date = dailyEvents[0].date;

  const events = dailyEvents.map((event) => (
    <EventWrapper key={event.id} event={event}>
      {(props) => <Event {...props} />}
    </EventWrapper>
  ));

  return (
    <li className={styles.dailyEventsContainer}>
      <p className={styles.eventsDate}>
        {format(new Date(date), "dd.MM.yyyy")}
      </p>
      <ul className={styles.dailyEvents}>{events}</ul>
    </li>
  );
});
