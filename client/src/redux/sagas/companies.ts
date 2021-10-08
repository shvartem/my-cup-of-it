import { takeEvery, call, put } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { getData } from '../tools';
import { actions } from '../slices';
import { ICompany } from '../../types/companiesTypes';

function* getAllCompanies(): SagaIterator {
  try {
    const allCompanies = yield call(() => getData<ICompany>('/api/companies'));
    yield put(actions.getAllCompaniesFulfilled(allCompanies));
  } catch (e) {
    yield put(actions.getAllCompaniesRejected(e as string));
  }
}

export default function* allCompaniesSaga(): SagaIterator {
  yield takeEvery(actions.getAllCompaniesPending, getAllCompanies);
}
