import { EventWithId } from "../types/StateTypes";

export const insert = (events: EventWithId[], newEvent: EventWithId) => {
  if (!events) {
    return [newEvent];
  }
  let index = events.length - 1;

  while (index !== -1) {
    if (events[index].start < newEvent.start) {
      break;
    }
    events[index + 1] = events[index];
    index--;
  }

  events[index + 1] = newEvent;
  return events;
};
