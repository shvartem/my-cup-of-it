import userReducer, { userActions } from './user';
import allUserReducer, { allUserActions } from './allUsers';
import allCompaniesReducer, { allCompaniesActions } from './companies';
import allTechnologiesReducer, { allTechnologiesActions } from './technologies';

const rootReducer = {
  user: userReducer,
  allUsers: allUserReducer,
  companies: allCompaniesReducer,
  technologies: allTechnologiesReducer,
};

export default rootReducer;

export const actions = {
  ...userActions,
  ...allUserActions,
  ...allCompaniesActions,
  ...allTechnologiesActions,
};
