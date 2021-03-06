import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./../store";

import { eventAddedAction } from "../actions/add";
import { eventEditedAction } from "../actions/edit";
import { eventRemovedAction } from "../actions/remove";
import { eventsFetchedAction } from "./../actions/fetch";

import { EventsState } from "../types/StateTypes";
import { EventWithId } from "../types/StateTypes";
import { SetStatusPayload } from "../types/ActionPayloads";

const initialState: EventsState = {
  ids: [],
  entities: {},
  status: "idle",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState: initialState,
  reducers: {
    eventAdded: eventAddedAction,
    eventEdited: eventEditedAction,
    eventRemoved: eventRemovedAction,
    eventsFetched: eventsFetchedAction,
    setStatus: (state, action: SetStatusPayload) => {
      const { status, globalError } = action.payload;

      state.status = status;
      state.globalError = globalError;
    },
  },
});

export const getEventsByDate = (state: RootState) => {
  const ids = state.events.ids;
  const events: EventWithId[][] = [];

  let index = -1;
  let currentDate = "";

  for (let id of ids) {
    const event = state.events.entities[id];

    if (event.date !== currentDate) {
      index++;
      events[index] = [];
      currentDate = event.date;
    }

    events[index].push(event);
  }

  return {
    events,
    status: state.events.status,
    error: state.events.globalError,
  };
};

export const {
  setStatus,
  eventAdded,
  eventEdited,
  eventRemoved,
  eventsFetched,
} = eventsSlice.actions;

export default eventsSlice.reducer;
