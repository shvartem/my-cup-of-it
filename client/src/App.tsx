/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { act } from 'react-dom/test-utils';
import useRouter from './routes';
import { actions } from './redux/slices';
import { useAppDispatch, useAppSelector } from './hooks';
import Spinner from './modules/common/Spinner';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.profile);
  const currentAdmin = useAppSelector((state) => state.admin.profile);

  const isLoading = useAppSelector((state) => state.user.isLoading);

  const isAuthenticated = Boolean(user?.id);
  const isAdmin = Boolean(currentAdmin?.id);

  const routes = useRouter(isAuthenticated, isAdmin);

  useEffect(() => {
    dispatch(actions.getInitialAdminPending());
    dispatch(actions.getInitialUserPending());
  }, [dispatch]);

  useEffect(() => {
    if (isAuthenticated || isAdmin) {
      dispatch(actions.getAllUsersPending());
      dispatch(actions.getAllCompaniesPending());
      dispatch(actions.getAllTechnologiesPending());
    }
  }, [dispatch, isAuthenticated, isAdmin]);

  if (isLoading) {
    return (
      <Spinner />
    );
  }

  return (
    <>
      {routes}
    </>
  );
};

export default App;
