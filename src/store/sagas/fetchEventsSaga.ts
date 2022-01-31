import { SerializedError } from "@reduxjs/toolkit";
import { all, call, put, takeLatest } from "redux-saga/effects";

import { FETCH_EVENTS } from "../types/Actions";
import { EventWithId } from "../types/StateTypes";

import { eventApi } from "../../shared/service/eventsApi";

import { eventsFetched, setStatus } from "../reducers/eventsSlice";

function* fetchEvents(): Generator<any, void, EventWithId[]> {
  try {
    yield put(setStatus({ status: "loading" }));

    const events = yield call(eventApi.fetchEvents);

    yield all([
      put(setStatus({ status: "succeeded" })),
      put(eventsFetched(events)),
    ]);
  } catch (err) {
    yield put(
      setStatus({ status: "error", globalError: err as SerializedError })
    );
  }
}

export default function* watchFetchEvent() {
  yield takeLatest(FETCH_EVENTS, fetchEvents);
}
