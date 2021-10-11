import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { actions } from '../slices';
import { getData, postData, editData } from '../tools';
import {
  IRegisterUserAction, ILoginUserAction, IMyProfile, IEditUserAction, IProfile,
} from '../../types/usersTypes';
import { IMeetBody, IWriteMeetingAction } from '../../types/meetingTypes';

function* writeUserMeeting({ payload }: IWriteMeetingAction): SagaIterator {
  try {
    console.log(payload);
    const newMeeting = yield call(() => postData<IMeetBody>('/api/meets', payload));
    yield put(actions.writeUserMeetingFulfilled(newMeeting));
  } catch (e) {
    yield put(actions.writeUserMeetingRejected(e as string));
  }
}

function* editUser({ payload }: IEditUserAction): SagaIterator {
  try {
    const editedUser = yield call(() => editData<IMyProfile>('/api/users', payload));
    yield put(actions.editUserFullfilled(editedUser));
  } catch (e) {
    yield put(actions.editUserRejected(e as string));
  }
}

function* loginUser({ payload }: ILoginUserAction): SagaIterator {
  try {
    const loggedUser = yield call(() => postData<IMyProfile>('/api/login', payload));
    yield put(actions.loginUserFulfilled(loggedUser as IMyProfile));
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
    yield put(actions.loginUserFulfilled(newUser as IMyProfile));
  } catch (e) {
    console.log(e);
    yield put(actions.loginUserRejected(e as string));
  }
}

function* loginInitialUser(): SagaIterator {
  try {
    const loggedUser = yield call(() => getData<IMyProfile>('/api/me'));
    yield put(actions.loginUserFulfilled(loggedUser as IMyProfile));
  } catch (e) {
    yield put(actions.loginUserRejected(e as string));
  }
}

export default function* userSaga() {
  yield takeEvery(`${actions.writeUserMeetingPending}`, writeUserMeeting);
  yield takeEvery(`${actions.loginUserPending}`, loginUser);
  yield takeEvery(`${actions.logoutUserPending}`, logoutUser);
  yield takeEvery(`${actions.registerUserPending}`, registerUser);
  yield takeEvery(`${actions.getInitialUserPending}`, loginInitialUser);
  yield takeEvery(`${actions.editUserPending}`, editUser);
}
