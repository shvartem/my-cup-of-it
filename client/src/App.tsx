/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import Navbar from './modules/Navbar';
import useRouter from './routes';
import { actions } from './redux/slices';
import { useAppDispatch, useAppSelector } from './hooks';

const App = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.profile);
  const isLoading = useAppSelector((state) => state.user.isLoading);
  const isAuthenticated = Boolean(user?.id);

  const routes = useRouter(isAuthenticated);

  useEffect(() => {
    dispatch(actions.getInitialUserPending());
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
      {routes}
    </>
  );
};

export default App;
