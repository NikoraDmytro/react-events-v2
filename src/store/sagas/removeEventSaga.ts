import { SerializedError } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { REMOVE_EVENT } from "../types/Actions";
import { EventWithId } from "../types/StateTypes";
import { RemoveEventPayload } from "../types/ActionPayloads";

import { eventRemoved, setStatus } from "../reducers/eventsSlice";

import { eventApi } from "../../shared/service/eventsApi";

function* removeEvent(
  action: RemoveEventPayload
): Generator<any, void, EventWithId> {
  try {
    const id = action.payload;

    yield call(eventApi.removeEvent, id);

    yield put(eventRemoved(id));
  } catch (err) {
    yield put(
      setStatus({ status: "error", globalError: err as SerializedError })
    );
  }
}

export default function* watchRemoveEvent() {
  yield takeEvery(REMOVE_EVENT, removeEvent);
}
