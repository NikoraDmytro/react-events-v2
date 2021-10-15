import { PayloadAction } from "@reduxjs/toolkit";
import { Event, EventWithId } from "./StateTypes";

export type AddEventActionType = PayloadAction<Event>;
export type RemoveEventActionType = PayloadAction<EventWithId>;
