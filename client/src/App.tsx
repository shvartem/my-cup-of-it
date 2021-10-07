/* eslint-disable no-unused-vars */
import React, { Children, useEffect, useState } from 'react';
import { url } from 'inspector';
import Navbar from './modules/Navbar';
import useRouter from './routes';
import { actions } from './redux/slices';
import { useAppDispatch, useAppSelector } from './hooks';
import UserCard from './modules/Home/componenets/UserCard';
import Home from './modules/Home';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.profile);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const isAuthenticated = Boolean(user?.id);

  const routes = useRouter(isAuthenticated);

  useEffect(() => {
    dispatch(actions.getInitialUserPending());
    dispatch(actions.getAllUsersPending());
  }, [dispatch]);

  if (isLoading) {
    return (
      <>
        <Navbar isAuth={isAuthenticated} />
        <h1>Идёт загрузка, подождите</h1>
      </>
    );
  }

  return (
    <>
      <Navbar isAuth={isAuthenticated} />
      <Home />
      {routes}
    </>
  );
};

export default App;
