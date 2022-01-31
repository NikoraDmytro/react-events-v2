import { EventsFetchedPayload } from "../types/ActionPayloads";
import { EventsState } from "../types/StateTypes";

import { comparator } from "../utils/comparator";

export const eventsFetchedAction = (
  state: EventsState,
  action: EventsFetchedPayload
) => {
  const allEvents = action.payload;

  allEvents.forEach((event) => {
    state.ids.push(event.id);
    state.entities[event.id] = event;
  });

  state.ids.sort(comparator(state));
};
