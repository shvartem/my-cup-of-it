import userReducer, { userActions } from './user';
import allUserReducer, { allUserActions } from './allUsers';
import allCompaniesReducer, { allCompaniesActions } from './companies';
import allTechnologiesReducer, { allTechnologiesActions } from './technologies';
import adminReducer, { adminActions } from './admin';
import feedbacksReducer, { feedbacksActions } from './feedbacks';

const rootReducer = {
  user: userReducer,
  allUsers: allUserReducer,
  companies: allCompaniesReducer,
  technologies: allTechnologiesReducer,
  admin: adminReducer,
  feedbacks: feedbacksReducer,
};

export default rootReducer;

export const actions = {
  ...userActions,
  ...allUserActions,
  ...allCompaniesActions,
  ...allTechnologiesActions,
  ...adminActions,
  ...feedbacksActions,
};
