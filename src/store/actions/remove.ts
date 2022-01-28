import { RemoveEventPayload } from "../types/ActionPayloads";
import { EventsState } from "../types/StateTypes";

export const removeEventAction = (
  state: EventsState,
  action: RemoveEventPayload
) => {
  const eventId = action.payload;

  state.ids = state.ids.filter((id) => id !== eventId);
  delete state.entities[eventId];
};
