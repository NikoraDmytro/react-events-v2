import { EventsState } from "../types/StateTypes";

export const comparator = (state: EventsState) => {
  return (id1: string, id2: string) => {
    const event1 = state.entities[id1];
    const event2 = state.entities[id2];

    if (event1.date === event2.date) {
      return event1.start.localeCompare(event2.start);
    }

    return event1.date.localeCompare(event2.date);
  };
};
