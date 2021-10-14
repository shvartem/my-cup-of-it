import React, { FC } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import { library } from '@fortawesome/fontawesome-svg-core';
import { IconName, IconPrefix } from '../../../../../node_modules/@fortawesome/fontawesome-common-types/index.d';
import { MyCard } from './types';
import styles from './card.module.css';
import { getExperience } from '../../../common/getExperience';
import { useAppSelector } from '../../../../hooks';
import defaultUserPhotoUrl from '../../../common/defaultUserPhotoUrl';
import { iconsObject, iconsObject2 } from './tools';

library.add(fab);
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
              <div style={{
                display: 'flex', marginTop: '0.3rem', width: '100%', justifyContent: 'space-around', alignItems: 'center',
              }}
              >
                {mentor.technologies.map((technology) => {
                  if (iconsObject[technology.title]) {
                    const str: IconName = iconsObject[technology.title];
                    return (
                      <span>
                        <FontAwesomeIcon icon={['fab', str]} size="3x" />
                        {' '}
                      </span>
                    );
                  } if (iconsObject2[technology.title]) {
                    return (
                      <span>
                        <img src={iconsObject2[technology.title]} alt={technology.title} style={{ width: '30px' }} />
                        {' '}
                      </span>

                    );
                  } return (
                    <span style={{ fontWeight: 'bolder' }}>
                      {technology.title}
                      {' '}
                    </span>
                  );
                })}
              </div>
              <div />

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
                disabled={!mentor.isActive || !currentUser.isActive}
              >
                Постучаться
              </Button>
            )}
          </div>
        </Card>
      </Link>
    </>
  );
};

export default UserCard;
