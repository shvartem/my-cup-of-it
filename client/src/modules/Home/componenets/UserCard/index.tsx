import React, { FC } from 'react';
import { Card, Button } from 'antd';
import { Link } from 'react-router-dom';
import { MyCard } from './types';
import styles from './card.module.css';

const { Meta } = Card;

const UserCard: React.FC<MyCard> = ({
  mentor,
}) => (
  <>
    <Card
      hoverable
      size="small"
      style={{ width: 240, margin: '1rem' }}
      cover={<img alt="example" src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" />}
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
        <Button size="small" type="primary">Постучаться</Button>
        <Button size="small" type="primary">
          <Link to={`users/${mentor.id}`}>Профиль</Link>
        </Button>
      </div>
    </Card>
  </>
);

export default UserCard;
