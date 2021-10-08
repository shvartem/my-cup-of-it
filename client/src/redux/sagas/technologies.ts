import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { ITechnology } from '../../types/technologiesTypes';
import { getData } from '../tools';
import { actions } from '../slices/index';

function* getAllTechnologies(): SagaIterator {
  try {
    const allTechnologies = yield call(() => getData<ITechnology[]>('/api/technologies'));
    yield put(actions.getAllTechnologiesFulFilled(allTechnologies as ITechnology[]));
  } catch (e) {
    yield put(actions.getAllTechnologiesRejected(e as string));
  }
}

export default function* allTechnologiesSaga() {
  yield takeEvery(actions.getAllTechnologiesPending, getAllTechnologies);
}
