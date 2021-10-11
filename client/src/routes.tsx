import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './modules/Home';
import LoginPage from './modules/AuthPage/components/LoginPage';
import RegisterPage from './modules/AuthPage/components/RegisterPage';
import Profile from './modules/Profile';
import Filters from './modules/Users/components/Filters';
import { useAppSelector } from './hooks';
import LoginAdminPage from './modules/AuthAdminPage/components/LoginAdminPage';
import AdminProfile from './modules/AdminProfile';
import Navbar from './modules/Navbar';

const useRouter = (isAuthenticated: boolean, isAdmin: boolean) => {
  const users = useAppSelector((state) => state.allUsers.data);

  if (isAuthenticated || isAdmin) {
    return (
      <>
        <Navbar isAuth={isAuthenticated} isAdmin={false} />

        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/profile">
            {isAdmin ? <AdminProfile /> : <Profile />}
          </Route>

          <Route path="/users/:userId">
            <Profile />
          </Route>

          <Route path="/users">
            <Filters users={users} />
          </Route>

          <Redirect to="/home" />

        </Switch>
      </>
    );
  }

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/register">
        <RegisterPage />
      </Route>

      <Route path="/top-secret-route">
        <LoginAdminPage />
      </Route>

      <Redirect to="/login" />
    </Switch>
  );
};
export default useRouter;
