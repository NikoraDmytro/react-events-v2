import { removeDate, removeEvent } from "../reducers/eventsSlice";
import { TypedDispatch } from "../store";
import { store } from "./../store";

export const remove = (date: string, id: string) => {
  return (dispatch: TypedDispatch, getState: typeof store.getState) => {
    const eventsList = getState().events.entities[date];

    if (eventsList.length === 1) {
      dispatch(removeDate({ date }));
    } else {
      dispatch(removeEvent({ date, id }));
    }
  };
};
