import { AddActionType } from "../types/ActionTypes";
import { EventsState } from "../types/StateTypes";

export const addEventAction = (state: EventsState, action: AddActionType) => {
  const newEvent = action.payload;
  const date = newEvent.date;

  state.entities[date].push(newEvent);
  state.entities[date].sort((a, b) => a.start.localeCompare(b.start));
};

export const addDateAction = (state: EventsState, action: AddActionType) => {
  const newEvent = action.payload;
  const date = newEvent.date;

  state.dates.push(date);
  state.dates.sort((a, b) => a.localeCompare(b));
  state.entities[date] = [newEvent];
};
