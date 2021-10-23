import { EventFormValues } from "../../shared/types/FormTypes";
import { Event } from "../../store/types/StateTypes";

export const getInitialValues = (event?: Event): EventFormValues => ({
  eventName: event ? event.name : "",
  eventDate: event ? event.date : "",
  eventStart: event ? event.start : "",
  eventEnd: event ? event.end : "",
});
