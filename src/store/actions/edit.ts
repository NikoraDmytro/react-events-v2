import { EventsState } from "../types/StateTypes";
import { EventEditedPayload } from "../types/ActionPayloads";

import { comparator } from "../utils/comparator";

export const eventEditedAction = (
  state: EventsState,
  action: EventEditedPayload
) => {
  const editedEvent = action.payload;
  const id = editedEvent.id;

  state.entities[id] = editedEvent;
  state.ids.sort(comparator(state));
};
