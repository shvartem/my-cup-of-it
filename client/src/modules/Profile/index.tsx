import React from 'react';
import { Tabs } from 'antd';
import InfoPage from './components/InfoPage';
import Manager from './components/Manager';
import Chat from './components/Chat';
import { Contaiter, TabWrapper } from './style';

const { TabPane } = Tabs;

const Profile: React.FC = () => {
  // const user = useAppSelector((state) => state.user.profile);
  // const isAuthenticated = Boolean(user?.id);
  const isAuth = true;

  return (
    <>
      <Contaiter>
        <Tabs type="card">
          <TabPane tab="Профиль" key="1">
            <TabWrapper>
              <InfoPage isAuth={isAuth} />
            </TabWrapper>
          </TabPane>
          {isAuth
            ? (
              <>
                <TabPane tab="Менеджер встреч" key="2">
                  <Manager />
                </TabPane>
              </>
            )
            : ''}
          <TabPane tab="Чат" key="3">
            <TabWrapper>
              <Chat />
            </TabWrapper>
          </TabPane>
        </Tabs>
      </Contaiter>
    </>
  );
};

export default Profile;
