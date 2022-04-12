/* eslint-disable require-yield */
import { take } from 'redux-saga/effects'
import { takeEvery, takeLatest, takeLeading, put } from 'redux-saga/effects';

async function getPeople() {
  const request = await fetch('https://swapi.dev/api/people')
  const data = await request.json()
  return data
}

const wait = (t) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, t);
})

export function* workerSaga() {
  const data = yield getPeople()
  // yield wait(1000)
  // console.log('click saga')
  console.log(data)
  yield put({ type: 'SET_PEOPLE', payload: data.results })
}

export function* watchClickSaga() {
  // while (true) {
  //   yield take('CLICK')
  //   console.log('clicksdasd')
  //   yield workerSaga()
  // }
  // or
  yield takeEvery('CLICK', workerSaga) // or takeLatest(последний), takeLeading(первый)

}

export default function* rootSaga() {
  yield watchClickSaga()
}

