import { SerializedError } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { EDIT_EVENT } from "../types/Actions";
import { EventWithId } from "../types/StateTypes";
import { EditEventPayload } from "../types/ActionPayloads";

import { eventEdited, setStatus } from "../reducers/eventsSlice";

import { eventApi } from "../../shared/service/eventsApi";

function* editEvent(
  action: EditEventPayload
): Generator<any, void, EventWithId> {
  try {
    const eventToEdit = action.payload;

    const editedEvent = yield call(eventApi.editEvent, eventToEdit);

    yield put(eventEdited(editedEvent));
  } catch (err) {
    yield put(
      setStatus({ status: "error", globalError: err as SerializedError })
    );
  }
}

export default function* watchEditEvent() {
  yield takeEvery(EDIT_EVENT, editEvent);
}
