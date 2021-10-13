import React, { FC } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { MyCard } from './types';
import styles from './card.module.css';
import { getExperience } from '../../../common/getExperience';
import { useAppSelector } from '../../../../hooks';
import defaultUserPhotoUrl from '../../../common/defaultUserPhotoUrl';

const { Meta } = Card;

const UserCard: React.FC<MyCard> = ({
  mentor, showModal,
}) => {
  const currentUser = useAppSelector((state) => state.user.profile);
  return (
    <>
      <Link to={`users/${mentor.id}`}>
        <Card
          hoverable
          size="small"
          style={{ width: 240, margin: '1rem' }}
          cover={(
            <img
              alt="example"
              style={{
                height: '250px',
                maxHeight: '250px',
                objectFit: 'cover',
              }}
              src={mentor.userPhoto ? mentor.userPhoto : defaultUserPhotoUrl}
            />
          )}
        >
          <Meta title={mentor.firstname} />
          {mentor.isMentor && (
            <div className={styles.userDetails}>
              <div>
                Работает в:
                {' '}
                {mentor.company}
              </div>
              <div>
                Опыт работы:
                {' '}
                {getExperience(mentor.careerStart)}
              </div>
            </div>
          )}

          <div className={styles.buttons}>
            {mentor.isMentor && !currentUser.isMentor && (
              <Button
                size="small"
                type="primary"
                onClick={(e) => {
                  e.preventDefault();
                  showModal(mentor.id);
                }}
                disabled={!mentor.isActive}
              >
                Постучаться
              </Button>
              // <Button size="small" type="primary" disabled={!mentor.isActive}>
              //   <Link to={`users/${mentor.id}`}>Профиль</Link>
              // </Button>
            )}
          </div>
        </Card>
      </Link>
    </>
  );
};

export default UserCard;
