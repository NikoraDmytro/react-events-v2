import { EventsState } from "../types/StateTypes";
import { AddEventPayload } from "../types/ActionPayloads";

import { comparator } from "./../utils/comparator";

export const addEventAction = (state: EventsState, action: AddEventPayload) => {
  const newEvent = action.payload;
  const id = newEvent.id;

  state.entities[id] = newEvent;
  state.ids.push(id);
  state.ids.sort(comparator(state));
};
