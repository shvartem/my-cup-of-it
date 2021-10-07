import { takeEvery, call, put } from 'redux-saga/effects';
import { getData } from '../tools';
import { actions } from '../slices';

function* getAllUsers(): Generator {
  try {
    const allUsers = yield call(getData, '/api/users');
    yield put(actions.getAllUsersFulfilled(allUsers));
  } catch (e) {
    yield put(actions.getAllUsersRejected(e));
  }
}

export default function* allUsersSaga(): Generator {
  yield takeEvery(actions.getAllUsersPending, getAllUsers);
}
