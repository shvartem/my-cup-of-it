import React from 'react';
import { Alert, Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import Manager from './components/Manager';
import { Contaiter, InnerContainer } from './style';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { IMyProfile, IProfile } from '../../types/usersTypes';
import { actions } from '../../redux/slices';

const { TabPane } = Tabs;

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.profile);
  const errorUser = useAppSelector((state) => state.user.error);
  const users = useAppSelector((state) => state.allUsers.data);
  // const errorUsers = useAppSelector((state) => state.allUsers.error);
  const { userId }: { userId: string } = useParams();
  const isMe = Boolean(!userId);

  const isCurrentUser = (user: IMyProfile | IProfile | undefined): user is IMyProfile => Boolean(user) && isMe;

  let user: IMyProfile | IProfile | undefined;
  if (isMe) user = currentUser;
  else user = users.find((userData) => userData.id === userId);

  function changeMeetsStatus(status: string, id: string) {
    dispatch(actions.changeUserMeetStatusPending({ status, id }));
  }

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
      {errorUser && (
      <Alert
        banner
        message={errorUser}
        type="error"
        closable
      />
      )}
      <Tabs type="card">
        <TabPane tab="Профиль" key="1">
          <InnerContainer>
            <InfoPage isMe={isMe} profileData={user} />
          </InnerContainer>
        </TabPane>
        <TabPane tab="Менеджер встреч" key="2">
          <Manager isMentor={user?.isMentor || false} meets={isCurrentUser(user) && user.meets} changeMeetsStatus={changeMeetsStatus} />
        </TabPane>
      </Tabs>
    </Contaiter>
  );
};

export default Profile;
