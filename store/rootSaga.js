
import { all, spawn } from 'redux-saga/effects';
/* importo las sagas  */

export default function* rootSaga() {
    yield all([
    /* llamo las sagas */
    ].map(spawn));
  }
  