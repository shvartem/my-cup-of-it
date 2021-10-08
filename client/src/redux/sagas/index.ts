import { all } from 'redux-saga/effects';
import userSaga from './user';
import allUsersSaga from './allUsers';
import allCompaniesSaga from './companies';

export default function* rootSaga() {
  yield all([
    userSaga(),
    allUsersSaga(),
    allCompaniesSaga(),
  ]);
}
