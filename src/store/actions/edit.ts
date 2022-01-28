import { EventsState } from "../types/StateTypes";
import { EditEventPayload } from "../types/ActionPayloads";

import { comparator } from "./../utils/comparator";

export const editEventAction = (
  state: EventsState,
  action: EditEventPayload
) => {
  const editedEvent = action.payload;
  const id = editedEvent.id;

  state.entities[id] = editedEvent;
  state.ids.sort(comparator(state));
};
