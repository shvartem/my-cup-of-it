import userReducer, { userActions } from './user';
import allUserReducer, { allUserActions } from './allUsers';

const rootReducer = {
  user: userReducer,
  allUser: allUserReducer,
};

export default rootReducer;

export const actions = {
  ...userActions,
  ...allUserActions,
};
