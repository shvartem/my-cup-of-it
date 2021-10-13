import React from 'react';
import {
  Image, Card, Timeline, Alert,
} from 'antd';
import { Link } from 'react-router-dom';
import { ITechnology } from '../../../../types/technologiesTypes';
import EditProfileButtons from './components/EditProfileButtons';
import { Container, CardWrapper, ImageWrapper } from './style';
import CommunicateButtons from './components/CommunicateButtons';
import { IInfoPageProps } from './types';
import { actions } from '../../../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../../../hooks';

const InfoPage: React.FC<IInfoPageProps> = ({ isMe, profileData, disableChangeRole }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.profile);
  const technologies = useAppSelector((state) => state.technologies.data);
  const error = useAppSelector((state) => state.technologies.error);
  function changeRole() {
    dispatch(actions.toggleUserRolePending({ id: profileData.id, isMentor: !profileData.isMentor }));
  }

  function changeStatus() {
    dispatch(actions.toggleUserStatusPending({ id: profileData.id, isActive: !profileData.isActive }));
  }

  function editProfile(values: any) {
    values.technologies = values.technologies.map((el: string) => technologies.find((elem: ITechnology) => elem.title === el)?.id);

    const formData = new FormData();
    Object.entries(values).forEach((value: [string, any]) => {
      if (value[0] === 'userPhoto' && value[1]) formData.append(`${value[0]}`, value[1][0].originFileObj);
      else formData.append(`${value[0]}`, value[1]);
    });
    dispatch(actions.editUserProfilePending({ formData, userId: currentUser.id }));
  }

  function editSocials(values: any) {
    console.log(values);
  }

  return (
    <Container>
      {technologies.length === 0 && (
      <Alert
        banner
        message="Стек технологий пуст"
        type="info"
        closable
      />
      )}
      {error && (
      <Alert
        banner
        message={error}
        type="error"
        closable
      />
      )}
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
              disableChangeRole={disableChangeRole}
            />
          ) : (profileData.isMentor && <CommunicateButtons />)
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
