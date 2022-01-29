import { all, spawn } from "redux-saga/effects";

import addEventSaga from "./addEventSaga";
import editEventSaga from "./editEventSaga";
import removeEventSaga from "./removeEventSaga";
import fetchEventsSaga from "./fetchEventsSaga";

export default function* rootSaga(): Generator<any, void, any> {
  yield all([
    spawn(addEventSaga),
    spawn(editEventSaga),
    spawn(removeEventSaga),
    spawn(fetchEventsSaga),
  ]);
}
