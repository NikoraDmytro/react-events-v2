import { EventsState } from "../types/StateTypes";
import { EventRemovedPayload } from "../types/ActionPayloads";

export const eventRemovedAction = (
  state: EventsState,
  action: EventRemovedPayload
) => {
  const eventId = action.payload;

  state.ids = state.ids.filter((id) => id !== eventId);
  delete state.entities[eventId];
};
