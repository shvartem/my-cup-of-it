import userReducer, { userActions } from './user';

const rootReducer = {
  user: userReducer,
};

export default rootReducer;

export const actions = {
  ...userActions,
};
