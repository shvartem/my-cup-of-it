import React, { FC } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MyCard } from './types';
import styles from './card.module.css';

const { Meta } = Card;

const UserCard: React.FC<MyCard> = ({
  mentor, showModal,
}) => (
  <>
    <Card
      hoverable
      size="small"
      style={{ width: 240, marginLeft: '1.5rem' }}
      cover={<img alt="example" src={mentor.userPhoto} />}
    >
      <Meta title={mentor.firstname} />
      <div className={styles.userDetails}>
        <div>
          Работает в:
          {' '}
          {mentor.company}
        </div>
        <div>
          Опыт работы:
          {' '}
          {mentor.careerStart}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button size="small" type="primary" onClick={() => showModal(mentor.id)} disabled={!mentor.isActive}>Постучаться</Button>
        <Button size="small" type="primary" disabled={!mentor.isActive}>
          <Link to={`users/${mentor.id}`}>Профиль</Link>
        </Button>
      </div>
    </Card>
  </>
);

export default UserCard;
