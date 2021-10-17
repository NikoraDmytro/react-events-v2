import { createSlice } from "@reduxjs/toolkit";
import {
  AddEventActionType,
  RemoveEventActionType,
} from "../types/ActionTypes";
import { EventsState } from "../types/StateTypes";
import { insert } from "./../utils/insert";

export const eventsSlice = createSlice({
  name: "events",
  initialState: {} as EventsState,
  reducers: {
    addEvent: (state, action: AddEventActionType) => {
      const newEvent = action.payload;
      const date = action.payload.date;

      state[date] = insert(state[date], newEvent);
    },
    removeEvent: (state, action: RemoveEventActionType) => {
      const { date, id } = action.payload;
      const index = state[date].findIndex((event) => event.id === id);

      if (state[date].length === 1) {
        delete state[date];
      } else {
        state[date].splice(index, 1);
      }
    },
  },
});

export const { addEvent, removeEvent } = eventsSlice.actions;

export default eventsSlice.reducer;
