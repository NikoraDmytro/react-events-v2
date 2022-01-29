import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "./../store";

import { eventAddedAction } from "../actions/add";
import { eventEditedAction } from "../actions/edit";
import { eventRemovedAction } from "../actions/remove";
import { eventsFetchedAction } from "./../actions/fetch";

import { EventsState } from "../types/StateTypes";
import { SetErrorPayload } from "../types/ActionPayloads";
import { EventWithId } from "../types/StateTypes";

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
    setLoading: (state) => {
      state.status = "loading";
    },
    setError: (state, action: SetErrorPayload) => {
      state.status = "failed";

      state.error = action.payload;
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
    error: state.events.error,
  };
};

export const {
  eventAdded,
  eventEdited,
  eventRemoved,
  setLoading,
  setError,
  eventsFetched,
} = eventsSlice.actions;

export default eventsSlice.reducer;
