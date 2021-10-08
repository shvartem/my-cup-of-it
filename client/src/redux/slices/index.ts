// import { RootState } from 'typesafe-actions';
import userReducer, { userActions } from './user';
import allUserReducer, { allUserActions } from './allUsers';
import allCompaniesReducer, { allCompaniesActions } from './companies';

const rootReducer = {
  user: userReducer,
  allUsers: allUserReducer,
  companies: allCompaniesReducer,
};

export default rootReducer;

export const actions = {
  ...userActions,
  ...allUserActions,
  ...allCompaniesActions,
};
