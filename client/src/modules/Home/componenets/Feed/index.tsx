import React, { FC } from 'react';
import { List } from 'antd';
import UserCard from '../UserCard';
// import { MyCard } from './types';
import styles from './feed.module.css';
import { useAppSelector } from '../../../../hooks';

const userProps = {
  name: 'Артур Пиражков',
  url: 'https://thumbs.dreamstime.com/b/professional-programmer-thinking-how-to-design-developing-online-steal-system-code-language-hacking-identity-119739196.jpg',
  experience: '3 years',
  company: 'yandex',
  prevCompany: 'google',
};

const Feed: React.FC = () => {
  const users = useAppSelector((state) => state.allUsers.data);
  console.log(users);
  const mentors = users.filter((user) => user.isMentor);

  return (
    <>
      {/* <UserCard mentor={userProps} /> */}
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={mentors}
        renderItem={(mentor) => (
          <List.Item>
            <UserCard mentor={mentor} />
          </List.Item>
        )}
      />
    </>
  );
};

export default Feed;
