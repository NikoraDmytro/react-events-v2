import { takeEvery, call, put } from "redux-saga/effects";

import { ADD_EVENT } from "../types/Actions";
import { EventWithId } from "../types/StateTypes";
import { AddEventPayload } from "../types/ActionPayloads";

import { eventApi } from "../../shared/service/eventsApi";

import { eventAdded } from "../reducers/eventsSlice";

function* addEvent(action: AddEventPayload): Generator<any, void, EventWithId> {
  try {
    const eventToAdd = action.payload;

    const newEvent = yield call(eventApi.addEvent, eventToAdd);

    yield put(eventAdded(newEvent));
  } catch (err) {
    console.log("Something went wrong!");
  }
}

export default function* watchAddEvent() {
  yield takeEvery(ADD_EVENT, addEvent);
}
