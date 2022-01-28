import { SerializedError } from "@reduxjs/toolkit";
import { takeLatest, put, call } from "redux-saga/effects";

import { FETCH_EVENTS } from "../types/Actions";
import { EventWithId } from "../types/StateTypes";
import { eventApi } from "../../shared/service/eventsApi";
import { eventsFetched, setError, setLoading } from "../reducers/eventsSlice";

function* fetchEventsSaga(): Generator<any, void, EventWithId[]> {
  try {
    yield put(setLoading());

    const events = yield call(eventApi.fetchEvents);

    yield put(eventsFetched(events));
  } catch (err) {
    yield put(setError(err as SerializedError));
  }
}

export default function* eventsSaga() {
  yield takeLatest(FETCH_EVENTS, fetchEventsSaga);
}
