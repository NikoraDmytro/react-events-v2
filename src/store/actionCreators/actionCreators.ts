import { EventFormValues } from "../../shared/types/FormTypes";

import { EDIT_EVENT } from "./../types/Actions";
import { ADD_EVENT, FETCH_EVENTS, REMOVE_EVENT } from "../types/Actions";

export const fetchEvents = () => {
  return { type: FETCH_EVENTS };
};

export const addEvent = (payload: EventFormValues) => {
  return {
    type: ADD_EVENT,
    payload,
  };
};

export const removeEvent = (payload: string) => {
  return {
    type: REMOVE_EVENT,
    payload,
  };
};

export const editEvent = (payload: EventFormValues & { id: string }) => {
  return {
    type: EDIT_EVENT,
    payload,
  };
};
