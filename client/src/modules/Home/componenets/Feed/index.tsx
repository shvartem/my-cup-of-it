import React, { FC } from 'react';
import UserCard from '../UserCard';
// import { MyCard } from './types';
import styles from './feed.module.css';

const userProps = {
  name: 'Артур Пиражков',
  url: 'https://thumbs.dreamstime.com/b/professional-programmer-thinking-how-to-design-developing-online-steal-system-code-language-hacking-identity-119739196.jpg',
  experience: '3 years',
  company: 'yandex',
  prevCompany: 'google',
};

const Feed: React.FC = () => (
  (
    <>
      <UserCard mentor={userProps} />
    </>
  )

);

export default Feed;
