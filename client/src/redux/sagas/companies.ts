import { takeEvery, call, put } from 'redux-saga/effects';
import { getData } from '../tools';
import { actions } from '../slices';

function* getAllCompanies(): Generator {
  try {
    const allCompanies = yield call(getData, '/api/companies');
    yield put(actions.getAllCompaniesFulfilled(allCompanies));
  } catch (e) {
    yield put(actions.getAllCompaniesRejected(e));
  }
}

export default function* allCompaniesSaga(): Generator {
  yield takeEvery(actions.getAllCompaniesPending, getAllCompanies);
}
