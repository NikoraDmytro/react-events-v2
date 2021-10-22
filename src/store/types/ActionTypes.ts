import { PayloadAction } from "@reduxjs/toolkit";
import { EventWithId } from "./StateTypes";

export type AddActionType = PayloadAction<EventWithId>;
export type EditActionType = PayloadAction<EventWithId>;
export type RemoveEventActionType = PayloadAction<{ date: string; id: string }>;
export type RemoveDateActionType = PayloadAction<{ date: string }>;
