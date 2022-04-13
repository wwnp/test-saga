/* eslint-disable require-yield */
import { all, call, spawn } from 'redux-saga/effects';
import loadBasicData from './initialSagas';
import pageLoaderSaga from './pageLoaderSaga';

export default function* rootSaga() {
  // const sagas = [pageLoaderSaga]
  const sagas = [loadBasicData, pageLoaderSaga]
  const retrySagas = sagas.map(saga => {
    return spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          break
        } catch (e) {
        }
      }
    })
  })
  yield all(retrySagas)
}

