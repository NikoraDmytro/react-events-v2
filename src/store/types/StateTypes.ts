import { SerializedError } from "@reduxjs/toolkit";

export type Event = {
  name: string;
  start: string;
  end: string;
  date: string;
};

export type EventWithId = Event & { id: string };

export type EventsState = {
  ids: string[];
  entities: {
    [id: string]: EventWithId;
  };
  status: "idle" | "loading" | "succeeded" | "error";
  globalError?: SerializedError;
};
