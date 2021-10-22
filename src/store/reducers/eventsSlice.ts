import { createSlice } from "@reduxjs/toolkit";
import {
  AddActionType,
  EditActionType,
  RemoveDateActionType,
  RemoveEventActionType,
} from "../types/ActionTypes";
import { EventsState } from "../types/StateTypes";
import { RootState } from "./../store";

const initialState: EventsState = {
  dates: [],
  entities: {},
};

export const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    addEvent: (state, action: AddActionType) => {
      const newEvent = action.payload;
      const date = newEvent.date;

      state.entities[date].push(newEvent);
      state.entities[date].sort((a, b) => (a.start > b.start ? 1 : -1));
    },
    addDate: (state, action: AddActionType) => {
      const newEvent = action.payload;
      const date = newEvent.date;

      state.dates.push(date);
      state.dates.sort((a, b) => (a > b ? 1 : -1));
      state.entities[date] = [newEvent];
    },
    removeEvent: (state, action: RemoveEventActionType) => {
      const { date, id: eventId } = action.payload;
      const eventsList = state.entities[date];

      const index = eventsList.findIndex(({ id }) => id === eventId);

      state.entities[date].splice(index, 1);
    },
    removeDate: (state, action: RemoveDateActionType) => {
      const { date: eventDate } = action.payload;
      const dates = state.dates;

      const index = dates.findIndex((date) => date === eventDate);

      state.dates.splice(index, 1);
      delete state.entities[eventDate];
    },
    editEvent: (state, action: EditActionType) => {
      const event = action.payload;
      const date = event.date;
      const eventsList = state.entities[date];

      const index = eventsList.findIndex(({ id }) => id === event.id);
      state.entities[date][index] = event;
      state.entities[date].sort((a, b) => (a.start > b.start ? 1 : -1));
    },
  },
});

export const getAllEvents = (state: RootState) => {
  const dates = state.events.dates;
  return dates.map((date) => state.events.entities[date]);
};

export const {
  addEvent,
  addDate,
  removeEvent,
  removeDate,
  editEvent,
} = eventsSlice.actions;

export default eventsSlice.reducer;
