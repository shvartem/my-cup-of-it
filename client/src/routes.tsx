import { Switch, Redirect, Route } from 'react-router-dom';
import LoginPage from './modules/AuthPage/LoginPage';
import RegisterPage from './modules/AuthPage/RegisterPage';

const useRouter = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/home">
          <div>home</div>
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/home">
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
