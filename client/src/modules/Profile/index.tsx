import React from 'react';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import Manager from './components/Manager';
import { Contaiter, InnerContainer } from './style';
import { useAppSelector } from '../../hooks';
import { IMyProfile, IProfile } from '../../types/usersTypes';

const { TabPane } = Tabs;

const Profile: React.FC = () => {
  const currentUser = useAppSelector((state) => state.user.profile);
  const users = useAppSelector((state) => state.allUsers.data);
  const { userId }: { userId: string } = useParams();
  const isMe = Boolean(!userId);

  const isCurrentUser = (user: IMyProfile | IProfile | undefined): user is IMyProfile => Boolean(user) && isMe;

  console.log({ currentUser });
  let user: IMyProfile | IProfile | undefined;
  if (isMe) user = currentUser;
  else user = users.find((userData) => userData.id === userId);

  if (!isMe) {
    return (
      <Contaiter>
        <InnerContainer>
          <InfoPage isMe={isMe} profileData={user} />
        </InnerContainer>
      </Contaiter>
    );
  }

  return (
    <Contaiter>
      <Tabs type="card">
        <TabPane tab="Профиль" key="1">
          <InnerContainer>
            <InfoPage isMe={isMe} profileData={user} />
          </InnerContainer>
        </TabPane>
        <TabPane tab="Менеджер встреч" key="2">
          <Manager meets={isCurrentUser(user) && user.meets} />
        </TabPane>
      </Tabs>
    </Contaiter>
  );
};

export default Profile;
