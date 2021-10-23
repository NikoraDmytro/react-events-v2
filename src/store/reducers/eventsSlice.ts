import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDateAction, addEventAction } from "../actions/add";
import { EventsState, EventWithId } from "../types/StateTypes";
import { RootState } from "./../store";
import { removeDateAction, removeEventAction } from "./../actions/remove";
import { EditEventAction } from "./../actions/edit";
import { Axios } from "./../../Axios";

const initialState: EventsState = {
  dates: [],
  entities: {},
  status: "idle",
};

export const fetchEvents = createAsyncThunk<EventWithId[]>(
  "events/fetchEvents",
  async () => {
    const response = await Axios.get<EventWithId[]>("/events");

    return response.data;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.status = "failed";

        state.error = action.error;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.status = "succeeded";
        const allEvents = action.payload;

        allEvents.forEach((event, index) => {
          const prevEvent = allEvents[index - 1];
          const date = event.date;
          const prevDate = prevEvent ? prevEvent.date : "-1";

          if (date !== prevDate) {
            state.dates.push(date);
            state.entities[date] = [];
          }

          state.entities[date].push(event);
        });
      });
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
