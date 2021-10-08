// import { RootState } from 'typesafe-actions';
import userReducer, { userActions } from './user';
import allUserReducer, { allUserActions } from './allUsers';

const rootReducer = {
  user: userReducer,
  allUsers: allUserReducer,
};

export default rootReducer;

export const actions = {
  ...userActions,
  ...allUserActions,
};
