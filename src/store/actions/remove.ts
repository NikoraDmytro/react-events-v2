import { RemoveDatePayload, RemoveEventPayload } from "../types/ActionPayloads";
import { EventsState } from "../types/StateTypes";

export const removeEventAction = (
  state: EventsState,
  action: RemoveEventPayload
) => {
  const { date, id: eventId } = action.payload;
  const eventsList = state.entities[date];

  const index = eventsList.findIndex(({ id }) => id === eventId);

  state.entities[date].splice(index, 1);
};

export const removeDateAction = (
  state: EventsState,
  action: RemoveDatePayload
) => {
  const { date: eventDate } = action.payload;
  const dates = state.dates;

  const index = dates.findIndex((date) => date === eventDate);

  state.dates.splice(index, 1);
  delete state.entities[eventDate];
};
