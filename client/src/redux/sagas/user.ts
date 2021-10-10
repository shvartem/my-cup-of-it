import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { actions } from '../slices';
import {
  getData, postData, editData, patchData,
} from '../tools';
import {
  IRegisterUserAction, ILoginUserAction, IMyProfile, IEditUserProfileAction, IProfile, IEditProfileStatusAction, IEditProfileRoleAction,
} from '../../types/usersTypes';

function* editUserProfile({ payload }: IEditUserProfileAction): SagaIterator {
  try {
    const updatedUser = yield call(() => editData<IMyProfile>('/api/users', payload));
    console.log({ updatedUser });
    yield put(actions.editUserProfileFullfilled(updatedUser));
  } catch (e) {
    yield put(actions.editUserProfileRejected(e as string));
  }
}

function* toggleUserStatus({ payload }: IEditProfileStatusAction): SagaIterator {
  try {
    yield call(() => patchData<IMyProfile>('/api/users', payload));
    yield put(actions.toggleUserStatusFullfilled());
  } catch (e) {
    yield put(actions.toggleUserStatusRejected(e as string));
  }
}

function* toggleUserRole({ payload }: IEditProfileRoleAction): SagaIterator {
  try {
    yield call(() => patchData<IMyProfile>('/api/users', payload));
    yield put(actions.toggleUserRoleFullfilled());
  } catch (e) {
    yield put(actions.toggleUserRoleRejected(e as string));
  }
}

function* loginUser({ payload }: ILoginUserAction): SagaIterator {
  try {
    const loggedUser = yield call(() => postData<IMyProfile>('/api/login', payload));
    yield put(actions.loginUserFullfilled(loggedUser as IMyProfile));
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
    yield put(actions.loginUserFullfilled(newUser as IMyProfile));
  } catch (e) {
    console.log(e);
    yield put(actions.loginUserRejected(e as string));
  }
}

function* loginInitialUser(): SagaIterator {
  try {
    const loggedUser = yield call(() => getData<IMyProfile>('/api/me'));
    yield put(actions.loginUserFullfilled(loggedUser as IMyProfile));
  } catch (e) {
    yield put(actions.loginUserRejected(e as string));
  }
}

export default function* userSaga() {
  yield takeEvery(`${actions.loginUserPending}`, loginUser);
  yield takeEvery(`${actions.logoutUserPending}`, logoutUser);
  yield takeEvery(`${actions.registerUserPending}`, registerUser);
  yield takeEvery(`${actions.getInitialUserPending}`, loginInitialUser);
  yield takeEvery(`${actions.editUserProfilePending}`, editUserProfile);
  yield takeEvery(`${actions.toggleUserRolePending}`, toggleUserRole);
  yield takeEvery(`${actions.toggleUserStatusPending}`, toggleUserStatus);
}
