/* eslint-disable no-unused-vars */
import React, { Children, useEffect, useState } from 'react';
import { url } from 'inspector';
import { Link } from 'react-router-dom';
import Navbar from './modules/Navbar';
import useRouter from './routes';
import { actions } from './redux/slices';
import { useAppDispatch, useAppSelector } from './hooks';
import UserCard from './modules/Home/componenets/UserCard';

const App: React.FC = () => {
  // const userProps = {
  //   name: 'Артур Пиражков',
  //   url: 'https://thumbs.dreamstime.com/b/professional-programmer-thinking-how-to-design-developing-online-steal-system-code-language-hacking-identity-119739196.jpg',
  //   experience: '3 years',
  //   company: 'yandex',
  //   prevCompany: 'google',
  // };

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

      {/* <UserCard mentor={userProps} /> */}

      {routes}
    </>
  );
};

export default App;
