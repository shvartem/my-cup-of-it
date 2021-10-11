import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getData } from '../tools';
import { actions } from '../slices';
import { IFeedback } from '../../types/feedbacksTypes';

function* getAllFeedbacks(): SagaIterator {
  try {
    const allFeedbacks = yield call(() => getData<IFeedback[]>('/api/feedbacks'));
    yield put(actions.getAllFeedbacksFulfilled(allFeedbacks));
  } catch (e) {
    yield put(actions.getAllFeedbacksRejected(e as string));
  }
}

export default function* allFeedbacksSaga(): SagaIterator {
  yield takeEvery(actions.getAllFeedbacksPending, getAllFeedbacks);
}
