import React from 'react';
import { Tabs } from 'antd';
import { useParams } from 'react-router-dom';
import InfoPage from './components/InfoPage';
import Manager from './components/Manager';
import { Contaiter, InnerContainer } from './style';

const { TabPane } = Tabs;

const user = {
  firstname: 'Julia',
  lastname: 'Glukhova',
  photoUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  email: 'julia@gmail.com',
  careerStart: '01.01.2016',
  company: 'Google',
  description: 'hahhhahahha',
  isMentor: true,
  isActive: true,
  meets: [
    {
      interviewerId: 1, date: '21.10.2021', comment: 'ahahhahaha', status: 'pending',
    },
    {
      interviewerId: 2, date: '21.10.2021', comment: 'ahahhahaha', status: 'upcoming',
    },
    {
      interviewerId: 3, date: '21.10.2021', comment: 'ahahhahaha', status: 'upcoming',
    },
    {
      interviewerId: 1, date: '21.10.2021', comment: 'ahahhahaha', status: 'past',
    },
    {
      interviewerId: 2, date: '21.10.2021', comment: 'ahahhahaha', status: 'past',
    },
    {
      interviewerId: 3, date: '21.10.2021', comment: 'ahahhahaha', status: 'pending',
    },
  ],
};

const Profile: React.FC = () => {
  const { userId }: { userId: string } = useParams();
  const isMe = Boolean(!userId);

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
    <>
      <Contaiter>
        <Tabs type="card">
          <TabPane tab="Профиль" key="1">
            <InnerContainer>
              <InfoPage isMe={isMe} profileData={user} />
            </InnerContainer>
          </TabPane>
          <TabPane tab="Менеджер встреч" key="2">
            <Manager meets={user.meets} />
          </TabPane>
        </Tabs>
      </Contaiter>
    </>
  );
};

export default Profile;
