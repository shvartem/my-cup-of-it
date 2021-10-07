import { all } from 'redux-saga/effects';
import userSaga from './user';
import allUsersSaga from './allUsers';

export default function* rootSaga() {
  yield all([
    userSaga(),
    allUsersSaga(),
  ]);
}
