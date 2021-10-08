/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import Navbar from './modules/Navbar';
import useRouter from './routes';
import { actions } from './redux/slices';
import { useAppDispatch, useAppSelector } from './hooks';
import Spinner from './modules/common/Spinner';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.profile);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const isAuthenticated = Boolean(user?.id);

  const routes = useRouter(isAuthenticated);

  useEffect(() => {
    dispatch(actions.getInitialUserPending());
    dispatch(actions.getAllUsersPending());
    dispatch(actions.getAllTechnologiesPending());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <Navbar isAuth={isAuthenticated} />
        <Spinner />
      </>
    );
  }

  return (
    <>
      <Navbar isAuth={isAuthenticated} />
      {routes}
    </>
  );
};

export default App;
