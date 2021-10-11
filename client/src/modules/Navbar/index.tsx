/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Menu, Button, PageHeader,
} from 'antd';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { actions } from '../../redux/slices';
import { useAppDispatch } from '../../hooks';

const MenuItemWrapper = styled.div`
  justify-content: center;
  display: flex;
`;
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

  // if (!isAuth && !isAdmin) {
  //   return (
  //     <PageHeader style={{ backgroundColor: 'fff' }}>
  //       <Menu theme="light" mode="horizontal">

  //         <Menu.Item key="Register">
  //           <Link to="/register">Регистрация</Link>
  //         </Menu.Item>

  //         <Menu.Item key="Login">
  //           <Link to="/login">Войти</Link>
  //         </Menu.Item>

  //       </Menu>
  //     </PageHeader>
  //   );
  // }

  return (
    <PageHeader style={{ padding: '0 0 10px' }}>
      <Menu style={{ display: 'flex', justifyContent: 'space-around' }} theme="light" mode="horizontal" defaultSelectedKeys={['Home']}>
        <MenuItemWrapper>
          <Menu.Item key="Home">
            <NavLink to="/home" activeClassName="nav-link--active"><i className="fas fa-mug-hot nav-link" /></NavLink>
          </Menu.Item>
        </MenuItemWrapper>

        <MenuItemWrapper style={{ width: '40%' }}>
          <Menu.Item key="Users">
            <NavLink to="/users" activeClassName="nav-link--active">
              <Button>Найти собеседника</Button>
            </NavLink>
          </Menu.Item>
        </MenuItemWrapper>

        <MenuItemWrapper>
          <Menu.Item key="Рrofile">
            <NavLink to="/profile" activeClassName="nav-link--active"><i className="fas fa-user-circle nav-link" /></NavLink>
          </Menu.Item>
          <Menu.Item key="Logout">
            <Button type="link" style={{ color: 'black' }} onClick={logoutHandler}><i className="fas fa-sign-out-alt nav-link" /></Button>
          </Menu.Item>
        </MenuItemWrapper>
      </Menu>
    </PageHeader>
  );
};

export default Navbar;
