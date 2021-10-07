import { Switch, Redirect, Route } from 'react-router-dom';
import LoginPage from './modules/AuthPage/LoginPage';
import RegisterPage from './modules/AuthPage/RegisterPage';
import Filters from './modules/Users/components/Filters';

const users = [
  {
    id: 1,
    firstname: 'alex',
    lastname: 'Borisov0',
    isMentor: true,
    company: 'yansex',
    // technology: {
    //   html: 'html',
    //   css: 'css',
    //   js: 'js',
    // },
  },
  {
    id: 2,
    firstname: 'boris',
    lastname: 'Borisov0',
    isMentor: true,
    company: 'googl',
    // technologyId: {
    //   html: 'html',

    //   js: 'js',
    // },
  },
  {
    id: 3,
    firstname: 'sergey',
    lastname: 'Borisov0',
    isMentor: true,
    company: 'ozon',
    // technologyId: {

    //   js: 'js',
    // },
  },
  {
    id: 4,
    firstname: 'vasya',
    lastname: 'Borisov0',
    isMentor: true,
    company: 'alibaba',
    // technologyId: {
    //   html: 'html',

    // },
  },
];
const useRouter = (isAuthenticated: boolean) => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/home">
          <div>home</div>
        </Route>
        <Route path="/users">
          <Filters users={users} />
        </Route>
        <Redirect to="/home" />
      </Switch>
    );
  }
  return (
    <Switch>
      {/* <Route path="/login"> */}
      {/*  <LoginPage /> */}
      {/* </Route> */}
      {/* <Route path="/register"> */}
      {/*  <RegisterPage /> */}
      {/* </Route> */}
      <Redirect to="/home" />
    </Switch>
  );
};
export default useRouter;
