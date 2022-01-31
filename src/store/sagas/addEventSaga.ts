import { SerializedError } from "@reduxjs/toolkit";
import { takeEvery, call, put, all } from "redux-saga/effects";

import { ADD_EVENT } from "../types/Actions";
import { EventWithId } from "../types/StateTypes";
import { AddEventPayload } from "../types/ActionPayloads";

import { eventApi } from "../../shared/service/eventsApi";

import { eventAdded, setStatus } from "../reducers/eventsSlice";

function* addEvent(action: AddEventPayload): Generator<any, void, EventWithId> {
  try {
    const eventToAdd = action.payload;

    const newEvent = yield call(eventApi.addEvent, eventToAdd);

    yield all([
      put(setStatus({ status: "succeeded" })),
      put(eventAdded(newEvent)),
    ]);
  } catch (err) {
    yield put(
      setStatus({ status: "error", globalError: err as SerializedError })
    );
  }
}

export default function* watchAddEvent() {
  yield takeEvery(ADD_EVENT, addEvent);
}
