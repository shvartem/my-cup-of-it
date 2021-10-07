import React from 'react';
import { Image, Card } from 'antd';
import EditProfileButtons from './components/EditProfileButtons';
import { Container, CardWrapper, ImageWrapper } from './style';
import CommunicateButtons from './components/CommunicateButtons';
import { IInfoPageProps } from './types';
import getModalItems from './modalItems';

const InfoPage: React.FC<IInfoPageProps> = ({ isMe, profileData }) => {
  const formItems = getModalItems(profileData);

  function changeRole() {
    console.log('Tут логика смены роли');
  }

  function changeStatus() {
    console.log('Tут логика смены статуса');
  }

  function editProfile(values: any) {
    console.log(values);
  }

  return (
    <Container>
      <ImageWrapper>
        <Image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        {
          isMe ? (
            <EditProfileButtons
              isMentor={profileData.isMentor}
              isActive={profileData.isActive}
              changeRole={changeRole}
              changeStatus={changeStatus}
              formItems={formItems}
              editProfile={editProfile}
            />
          ) : <CommunicateButtons />
        }
      </ImageWrapper>
      <CardWrapper>
        <Card title={`${profileData.firstname} ${profileData.lastname}`}>
          <p>
            {profileData.description}
          </p>
          <p>
            Компания:
            {' '}
            {profileData.company}
          </p>
          <p>
            Опыт работы:
            {' '}
            {profileData.careerStart}
          </p>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default InfoPage;
