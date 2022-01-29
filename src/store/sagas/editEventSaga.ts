import { call, put, takeEvery } from "redux-saga/effects";

import { EDIT_EVENT } from "../types/Actions";
import { EventWithId } from "../types/StateTypes";
import { EditEventPayload } from "../types/ActionPayloads";

import { eventEdited } from "../reducers/eventsSlice";

import { eventApi } from "../../shared/service/eventsApi";

function* editEvent(
  action: EditEventPayload
): Generator<any, void, EventWithId> {
  try {
    const eventToEdit = action.payload;

    const editedEvent = yield call(eventApi.editEvent, eventToEdit);

    yield put(eventEdited(editedEvent));
  } catch (err) {
    console.log("Something went wrong!");
  }
}

export default function* watchEditEvent() {
  yield takeEvery(EDIT_EVENT, editEvent);
}
