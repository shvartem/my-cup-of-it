/* eslint-disable no-unused-vars */
import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link } from 'react-router-dom';
import { actions } from '../../redux/slices';
import { useAppDispatch } from '../../hooks';

const { Header } = Layout;

interface INavbarProps {
  isAuth: boolean,
  isAdmin: boolean,
}

const Navbar: React.FC<INavbarProps> = ({ isAuth, isAdmin }) => {
  const dispatch = useAppDispatch();

  function logoutHandler() {
    if (isAdmin) {
      return dispatch(actions.logoutAdminPending());
    }
    return dispatch(actions.logoutUserPending());
  }

  if (!isAuth && !isAdmin) {
    return (
      <Header>
        <Menu theme="dark" mode="horizontal">
          <Menu.Item key="Register">
            <Link to="/register">Register</Link>
          </Menu.Item>

          <Menu.Item key="Login">
            <Link to="/login">Login</Link>
          </Menu.Item>
        </Menu>
      </Header>
    );
  }

  return (
    <Header>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="Home">
          <Link to="/home">Home</Link>
        </Menu.Item>

        <Menu.Item key="Users">
          <Link to="/users">Users</Link>
        </Menu.Item>

        <Menu.Item key="Рrofile">
          <Link to="/profile">Профиль</Link>
        </Menu.Item>

        <Menu.Item key="Logout">
          <Button type="link" onClick={logoutHandler}>Выйти</Button>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
