import { Switch, Redirect, Route } from 'react-router-dom';
import { useAppSelector } from './hooks';

import Home from './modules/Home';
import LoginAdminPage from './modules/AuthAdminPage/components/LoginAdminPage';
import RegisterPage from './modules/AuthPage/components/RegisterPage';
import LoginPage from './modules/AuthPage/components/LoginPage';
import AdminProfile from './modules/AdminProfile';
import Profile from './modules/Profile';
import Filters from './modules/Users/components/Filters';
import FeedbackPage from './modules/FeedbackPage';

import { Container } from './modules/common/style';
import Navbar from './modules/Navbar';

const useRouter = (isAuthenticated: boolean, isAdmin: boolean) => {
  const users = useAppSelector((state) => state.allUsers.data);
  console.log({ isAuthenticated });
  if (isAuthenticated || isAdmin) {
    return (
      <>
        <Navbar isAuth={isAuthenticated} isAdmin={isAdmin} />
        <Switch>
          <Route path="/feedback">
            <FeedbackPage />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/profile">
            <Container>
              {isAdmin ? <AdminProfile /> : <Profile />}
            </Container>
          </Route>

          <Route path="/users/:userId">
            <Container>
              <Profile />
            </Container>
          </Route>

          <Route path="/users">
            <Container>
              <Filters users={users} />
            </Container>
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
