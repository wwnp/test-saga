import { all, call, delay, fork } from "redux-saga/effects"
import { API } from "../../../api"

function* auth() {
  yield delay(2000)
  console.log('auth ok')
  return true
}
function* loadUsers() {
  const request = yield call(fetch, API('people'))
  const data = yield call([request, request.json])
  console.log(data)
}
export default function* loadBasicData() {
  yield all([
    fork(auth),
    fork(loadUsers)
  ])
}