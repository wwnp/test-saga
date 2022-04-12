/* eslint-disable require-yield */
import { call, take, fork, spawn, join, select } from 'redux-saga/effects'
import { takeEvery, takeLatest, takeLeading, put } from 'redux-saga/effects';

// call - последовательная задача
// fork - паралелльная задача, если ошибка все остановится
// spawn - паралельная задача в корне саги ,если ошибка все продолжится
// join - заблокировать не блокирующую задачу и получить ее резалтат
// select - получить данные из store аналог useSelect

async function swapi(pattern) {
  const request = await fetch(`https://swapi.dev/api/${pattern}`)
  const data = await request.json()
  return data
}
// async function getPeople(id) {
//   const request = await fetch('https://swapi.dev/api/people')
//   const data = await request.json()
//   return data
// }

const wait = (t) => new Promise((resolve) => {
  setTimeout(() => {
    resolve()
  }, t);
})

export function* loadPeople() {
  // throw new Error()
  const people = yield call(swapi, 'people')
  yield put({ type: 'SET_PEOPLE', payload: people.results })
  return people
}
export function* loadPlanets() {
  const planets = yield call(swapi, 'planets')
  yield put({ type: 'SET_PLANETS', payload: planets.results })
}

export function* workerSaga() {
  const task = yield fork(loadPeople) // or spawn


  yield join(task)
  yield call(loadPlanets)

  const store = yield select(s => s)
  console.log(store)

  // const planets = yield call(swapi, 'planets')
  // yield put({ type: 'SET_PLANETS', payload: planets.results })
}

export function* watchClickSaga() {
  // while (true) {
  //   yield take('CLICK')
  //   console.log('clicksdasd')
  //   yield workerSaga()
  // }
  // or

  yield takeEvery('LOAD_DATA', workerSaga) // or takeLatest(последний), takeLeading(первый)

}

export default function* rootSaga() {
  yield watchClickSaga()
}

