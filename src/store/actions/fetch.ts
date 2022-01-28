import { EventsFetchedPayload } from "../types/ActionPayloads";
import { EventsState } from "../types/StateTypes";

export const eventsFetchedAction = (
  state: EventsState,
  action: EventsFetchedPayload
) => {
  state.status = "succeeded";

  const allEvents = action.payload;

  allEvents.forEach((event) => {
    const date = event.date;
    const lastIndex = state.dates.length - 1;

    if (date !== state.dates[lastIndex]) {
      state.dates.push(date);
      state.entities[date] = [];
    }

    state.entities[date].push(event);
  });
};
