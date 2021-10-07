import { Switch, Redirect, Route } from 'react-router-dom';

import LoginPage from './modules/AuthPage/components/LoginPage';
import RegisterPage from './modules/AuthPage/components/RegisterPage';
import Profile from './modules/Profile';
import Filters from './modules/Users/components/Filters';

const useRouter = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/home">
          <div>home</div>
        </Route>

        <Route path="/profile">
          <Profile />
        </Route>

        <Route path="/users">
          <Filters />
        </Route>
        <Redirect to="/home" />
      </Switch>
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
      <Redirect to="/home" />
    </Switch>
  );
};
export default useRouter;
