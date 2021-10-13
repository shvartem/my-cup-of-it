import React from 'react';
import {
  Image, Card, Timeline, Alert,
} from 'antd';
import { ITechnology } from '../../../../types/technologiesTypes';
import EditProfileButtons from './components/EditProfileButtons';
import { Container, CardWrapper, ImageWrapper } from './style';
import CommunicateButtons from './components/CommunicateButtons';
import { IInfoPageProps } from './types';
import { actions } from '../../../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import ISocial from '../../../../types/socialsTypes';

interface ISocialClasses {
  [key: string]: string
}

const socialClasses: ISocialClasses = {
  Telegram: 'fab fa-telegram social-icon',
  WhatsApp: 'fab fa-whatsapp social-icon',
  LinkedIn: 'fab fa-linkedin-in social-icon',
};

const InfoPage: React.FC<IInfoPageProps> = ({ isMe, profileData, disableChangeRole }) => {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.user.profile);
  const technologies = useAppSelector((state) => state.technologies.data);
  const error = useAppSelector((state) => state.technologies.error);

  const socialItems = profileData.socials.map((el: any) => Object.entries(el)[0]);

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
    values = Object.entries(values).map((el) => {
      const [socialTitle, url] = el;
      if (url === '') return [socialTitle, ''];
      if (socialTitle === 'Telegram') el = [socialTitle, `https://t.me/${url}`];
      if (socialTitle === 'WhatsApp') el = [socialTitle, `https://wa.me/${url}`];
      if (socialTitle === 'LinkedIn') el = [socialTitle, `https://linkedin.com/in/${url}`];
      return el;
    });

    values = Object.fromEntries(values);

    if (!profileData.socials.length) {
      console.log('in add', { values });
      dispatch(actions.addUserSocialsPending({ id: profileData.id, socials: values }));
      return;
    }
    console.log('in edit', { values });
    dispatch(actions.changeUserSocialsPending({ id: profileData.id, socials: values }));
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
            {profileData.socials.length && (
              <Timeline.Item>
                <div>
                  <p style={{ margin: '0 10px 0 0' }}>Контакты:</p>
                  {socialItems.map((el: [string, string]) => {
                    const [socialTitle, url] = el;
                    return (
                      <a href={url} target="_blank" rel="noreferrer">
                        <i key={socialTitle} className={socialClasses[socialTitle]} />
                      </a>
                    );
                  })}
                </div>
              </Timeline.Item>
            )}
          </Timeline>
        </Card>
      </CardWrapper>
    </Container>
  );
};

export default InfoPage;
