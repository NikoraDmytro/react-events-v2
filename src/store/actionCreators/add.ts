import { addDate, addEvent } from "../reducers/eventsSlice";
import { TypedDispatch } from "../store";
import { EventWithId } from "../types/StateTypes";
import { store } from "./../store";

export const add = (event: EventWithId) => {
  return (dispatch: TypedDispatch, getState: typeof store.getState) => {
    const eventsList = getState().events.entities[event.date];

    if (!eventsList) {
      dispatch(addDate(event));
    } else {
      dispatch(addEvent(event));
    }
  };
};
