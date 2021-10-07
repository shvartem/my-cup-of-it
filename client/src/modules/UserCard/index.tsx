import React, { FC } from 'react';
import { Card, Button } from 'antd';
import { MyCard } from './types';
import styles from './card.module.css';

const { Meta } = Card;
type x = () => number;
// функция без арг, возвращ. число;

const funct: x = () => 4;

const UserCard: React.FC<MyCard> = ({
  mentor,
}) => (
  <>
    <Card
      hoverable
      size="small"
      style={{ width: 240, margin: '1rem' }}
      cover={<img alt="example" src={mentor.url} />}
    >
      <Meta title={mentor.name} />
      <div className={styles.userDetails}>
        <div>
          Работает:
          {' '}
          {mentor.company}
        </div>
        <div>
          До этого работал:
          {' '}
          {mentor.prevCompany}
        </div>
        <div>
          Опыт работы:
          {' '}
          {mentor.experience}
        </div>
      </div>
      <div className={styles.buttons}>
        <Button size="small" type="primary">Постучаться</Button>
        <Button size="small" type="primary">Профиль</Button>
      </div>
    </Card>
  </>
);

export default UserCard;
