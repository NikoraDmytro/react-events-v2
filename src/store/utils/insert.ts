import { EventWithId } from "../types/StateTypes";

export const insert = (events: EventWithId[], newEvent: EventWithId) => {
  if (!events) {
    return [newEvent];
  }
  let index = events.length - 1;

  while (true) {
    if (events[index].start > newEvent.start) {
      events[index + 1] = events[index];
    } else {
      events[index + 1] = newEvent;
      return events;
    }
  }
};
