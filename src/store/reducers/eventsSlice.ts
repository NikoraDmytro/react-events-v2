import { createSlice } from "@reduxjs/toolkit";
import { addDateAction, addEventAction } from "../actions/add";
import { EventsState } from "../types/StateTypes";
import { RootState } from "./../store";
import { removeDateAction, removeEventAction } from "./../actions/remove";
import { EditEventAction } from "./../actions/edit";

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
    editEvent: EditEventAction,
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
} = eventsSlice.actions;

export default eventsSlice.reducer;
