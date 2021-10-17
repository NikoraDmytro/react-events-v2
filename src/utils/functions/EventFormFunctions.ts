import { nanoid } from "@reduxjs/toolkit";

import { EventFormValues } from "../../shared/types/FormTypes";
import { Event, EventWithId } from "../../store/types/StateTypes";

export const getInitialValues = (event?: Event): EventFormValues => ({
  eventName: event ? event.name : "",
  eventDate: event ? event.date : "",
  eventStart: event ? event.start : "",
  eventEnd: event ? event.end : "",
});

export const parseFormValues = (
  formValues: EventFormValues,
  id?: string
): EventWithId => ({
  name: formValues.eventName,
  date: formValues.eventDate,
  start: formValues.eventStart,
  end: formValues.eventEnd,
  id: id || nanoid(),
});
