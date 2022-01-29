import { PayloadAction, SerializedError } from "@reduxjs/toolkit";
import { EventFormValues } from "../../shared/types/FormTypes";

import { EventWithId } from "./StateTypes";

export type EventAddedPayload = PayloadAction<EventWithId>;
export type EventEditedPayload = PayloadAction<EventWithId>;
export type EventRemovedPayload = PayloadAction<string>;

export type AddEventPayload = PayloadAction<EventFormValues>;
export type EditEventPayload = PayloadAction<EventFormValues & { id: string }>;
export type RemoveEventPayload = PayloadAction<string>;

export type EventsFetchedPayload = PayloadAction<EventWithId[]>;
export type SetErrorPayload = PayloadAction<SerializedError>;
