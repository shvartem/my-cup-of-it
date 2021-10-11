/* eslint-disable no-unused-vars */
import React, { Children, useEffect, useState } from 'react';
import { url } from 'inspector';
import { Link } from 'react-router-dom';
import Navbar from './modules/Navbar';
import useRouter from './routes';
import { actions } from './redux/slices';
import { useAppDispatch, useAppSelector } from './hooks';

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
      dispatch(actions.getAllTechnologiesPending());
    }
  }, [dispatch, isAuthenticated, isAdmin]);

  if (isLoading) {
    return (
      <>
        <Navbar isAuth={isAuthenticated} isAdmin={isAdmin} />
        <h1>Идёт загрузка, подождите</h1>
      </>
    );
  }

  return (
    <>
      <Navbar isAuth={isAuthenticated} isAdmin={isAdmin} />

      {/* <UserCard mentor={userProps} /> */}

      {routes}
    </>
  );
};

export default App;
