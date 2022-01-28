import { createSlice } from "@reduxjs/toolkit";
import { addDateAction, addEventAction } from "../actions/add";
import { EventsState } from "../types/StateTypes";
import { RootState } from "./../store";
import { removeDateAction, removeEventAction } from "./../actions/remove";
import { editEventAction } from "./../actions/edit";
import { SetErrorPayload } from "../types/ActionPayloads";
import { eventsFetchedAction } from "./../actions/fetch";

const initialState: EventsState = {
  dates: [],
  entities: {},
  status: "idle",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    addEvent: addEventAction,
    addDate: addDateAction,
    removeEvent: removeEventAction,
    removeDate: removeDateAction,
    editEvent: editEventAction,
    eventsFetched: eventsFetchedAction,
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state, action: SetErrorPayload) => {
      state.status = "failed";

      state.error = action.payload;
    },
  },
});

export const getAllEvents = (state: RootState) => {
  const dates = state.events.dates;
  const events = dates.map((date) => state.events.entities[date]);

  return {
    events,
    status: state.events.status,
    error: state.events.error,
  };
};

export const {
  addEvent,
  addDate,
  removeEvent,
  removeDate,
  editEvent,
  setLoading,
  setError,
  eventsFetched,
} = eventsSlice.actions;

export default eventsSlice.reducer;
