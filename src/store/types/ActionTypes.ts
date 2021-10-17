import { PayloadAction } from "@reduxjs/toolkit";
import { EventWithId } from "./StateTypes";

export type AddEventActionType = PayloadAction<EventWithId>;
export type RemoveEventActionType = PayloadAction<EventWithId>;
