import React from 'react';
import { Image, Card, Timeline } from 'antd';
import { Link } from 'react-router-dom';
import { ITechnology } from '../../../../types/technologiesTypes';
import EditProfileButtons from './components/EditProfileButtons';
import { Container, CardWrapper, ImageWrapper } from './style';
import CommunicateButtons from './components/CommunicateButtons';
import { IInfoPageProps } from './types';
import { actions } from '../../../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

const InfoPage: React.FC<IInfoPageProps> = ({ isMe, profileData }) => {
  const dispatch = useAppDispatch();
  const technologies = useAppSelector((state) => state.technologies.data);

  function changeRole() {
    dispatch(actions.toggleUserRolePending({ id: profileData.id, isMentor: !profileData.isMentor }));
  }

  function changeStatus() {
    dispatch(actions.toggleUserStatusPending({ id: profileData.id, isActive: !profileData.isActive }));
  }

  function editProfile(values: any) {
    values.technologies = values.technologies.map((el: string) => technologies.find((elem: ITechnology) => elem.title === el)?.id);
    dispatch(actions.editUserProfilePending({ ...profileData, ...values }));
  }

  function editSocials(values: any) {
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
              profileData={profileData}
              changeRole={changeRole}
              changeStatus={changeStatus}
              editProfile={editProfile}
              editSocials={editSocials}
            />
          ) : <CommunicateButtons />
        }
      </ImageWrapper>
      <CardWrapper>
        <Card title={`${profileData.firstname} ${profileData.lastname}`}>
          <Timeline>

            {(!profileData.company && !profileData.careerStart && !profileData.technologies.length && !profileData.description)
              && <p style={{ color: '#ff4d4f' }}>Заполните информацию о себе в редактировании профиля</p>}
            {profileData.company && (
              <Timeline.Item>
                {`${profileData.position} в ${profileData.company}`}
              </Timeline.Item>
            )}
            {profileData.careerStart && (
              <Timeline.Item>
                {`Начало работы: ${profileData.careerStart}`}
              </Timeline.Item>
            )}
            {profileData.technologies.length && (
              <Timeline.Item>{`Мой стек: ${profileData.technologies.map((el: ITechnology) => el.title).join(', ')}`}</Timeline.Item>
            )}
            {profileData.description && (
              <Timeline.Item>
                {profileData.description}
              </Timeline.Item>
            )}
          </Timeline>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default InfoPage;
