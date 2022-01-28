import { EditEventPayload } from "../types/ActionPayloads";
import { EventsState } from "../types/StateTypes";

export const editEventAction = (
  state: EventsState,
  action: EditEventPayload
) => {
  const event = action.payload;
  const date = event.date;
  const eventsList = state.entities[date];

  const index = eventsList.findIndex(({ id }) => id === event.id);
  state.entities[date][index] = event;
  state.entities[date].sort((a, b) => a.start.localeCompare(b.start));
};
