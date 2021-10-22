import { batch } from "react-redux";
import { editEvent } from "../reducers/eventsSlice";
import { TypedDispatch } from "../store";
import { EventWithId } from "../types/StateTypes";
import { remove } from "./remove";
import { add } from "./add";

export const edit = (previousEvent: EventWithId, newEvent: EventWithId) => {
  return (dispatch: TypedDispatch) => {
    if (previousEvent.date === newEvent.date) {
      dispatch(editEvent(newEvent));
    } else {
      batch(() => {
        dispatch(remove(previousEvent.date, previousEvent.id));
        dispatch(add(newEvent));
      });
    }
  };
};
