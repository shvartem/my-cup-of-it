import {
  takeEvery, call, put, StrictEffect,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { actions } from '../slices';
import { getData, postData } from '../tools';
import {
  ILoginUserAction, IRegisterData, IRegisterUserAction,
} from '../types';
import { IMyProfile } from '../../types/usersTypes';

function* loginUser({ payload }: ILoginUserAction): SagaIterator {
  try {
    const loggedUser = yield call(() => getData<IMyProfile>('/api/users'));
    yield put(actions.getAllUsersFulfilled(loggedUser));
  } catch (e) {
    yield put(actions.loginUserRejected(e as string));
  }
}

function* logoutUser(): SagaIterator {
  try {
    yield call(getData, '/api/logout');
    yield put(actions.logoutUserFullfilled());
  } catch (e) {
    yield put(actions.logoutUserRejected(e as string));
  }
}

function* registerUser({ payload }: IRegisterUserAction): SagaIterator {
  try {
    const newUser = yield call(() => postData<IMyProfile>('/api/register', payload));
    yield put(actions.loginUserFullfilled(newUser));
  } catch (e) {
    console.log(e);
    yield put(actions.loginUserRejected(e as string));
  }
}

function* loginInitialUser(): SagaIterator {
  try {
    const loggedUser = yield call(() => getData<IMyProfile>('/api/ме'));
    yield put(actions.loginUserFullfilled(loggedUser));
  } catch (e) {
    yield put(actions.loginUserRejected(e as string));
  }
}

export default function* userSaga() {
  yield takeEvery(`${actions.loginUserPending}`, loginUser);
  yield takeEvery(`${actions.logoutUserPending}`, logoutUser);
  yield takeEvery(`${actions.registerUserPending}`, registerUser);
  yield takeEvery(`${actions.getInitialUserPending}`, loginInitialUser);
}
