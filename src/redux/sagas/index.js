/* eslint-disable require-yield */
import { all, call, delay, fork, put, spawn, take, takeEvery } from 'redux-saga/effects';
import { loadBasicData } from './initialSagas';

function* asyncInc() {
  yield delay(1000)
  yield put({ type: 'INC' })
}

export default function* rootSaga() {
  yield takeEvery('INC_ASYNC', asyncInc)
  yield take("DEC")
  // const sagas = [loadBasicData, counter]
  // const retrySagas = sagas.map(saga => {
  //   return spawn(function* () {
  //     while (true) {
  //       try {
  //         yield call(saga)
  //         break
  //       } catch (e) {
  //       }
  //     }
  //   })
  // })
  // yield all(retrySagas)
}

