import { Switch, Redirect, Route } from 'react-router-dom';
import Home from './modules/Home';
import LoginPage from './modules/AuthPage/components/LoginPage';
import RegisterPage from './modules/AuthPage/components/RegisterPage';
import Profile from './modules/Profile';
import Filters from './modules/Users/components/Filters';
import { useAppSelector } from './hooks';
import LoginAdminPage from './modules/AuthAdminPage/components/LoginAdminPage';
import AdminProfile from './modules/AdminProfile';
import { Container } from './modules/common/style';

const useRouter = (isAuthenticated: boolean, isAdmin: boolean) => {
  const users = useAppSelector((state) => state.allUsers.data);
  console.log({ isAuthenticated });
  if (isAuthenticated || isAdmin) {
    return (
      <>
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
