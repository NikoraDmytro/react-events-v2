import { PayloadAction, SerializedError } from "@reduxjs/toolkit";

import { EventWithId } from "./StateTypes";

export type AddEventPayload = PayloadAction<EventWithId>;
export type EditEventPayload = PayloadAction<EventWithId>;
export type RemoveEventPayload = PayloadAction<string>;
export type EventsFetchedPayload = PayloadAction<EventWithId[]>;
export type SetErrorPayload = PayloadAction<SerializedError>;
