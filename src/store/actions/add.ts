import { EventsState } from "../types/StateTypes";
import { EventAddedPayload } from "../types/ActionPayloads";

import { comparator } from "../utils/comparator";

export const eventAddedAction = (
  state: EventsState,
  action: EventAddedPayload
) => {
  const newEvent = action.payload;
  const id = newEvent.id;

  state.entities[id] = newEvent;
  state.ids.push(id);
  state.ids.sort(comparator(state));
};
