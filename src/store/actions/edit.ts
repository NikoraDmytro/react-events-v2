import { EditActionType } from "../types/ActionTypes";
import { EventsState } from "../types/StateTypes";

export const EditEventAction = (state: EventsState, action: EditActionType) => {
  const event = action.payload;
  const date = event.date;
  const eventsList = state.entities[date];

  const index = eventsList.findIndex(({ id }) => id === event.id);
  state.entities[date][index] = event;
  state.entities[date].sort((a, b) => a.start.localeCompare(b.start));
};
