import { configureStore } from "@reduxjs/toolkit";
import eventsReducer from "./reducers/eventsSlice";

export const store = configureStore({
  reducer: {
    events: eventsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type TypedDispatch = typeof store.dispatch;
