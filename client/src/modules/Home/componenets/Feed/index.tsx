import React, { FC } from 'react';
import { List, Modal, Input } from 'antd';
import { ThemeConsumer } from 'styled-components';
import UserCard from '../UserCard';
import styles from './feed.module.css';
import { useAppSelector } from '../../../../hooks';
import { modalFunc, modalFuncHandle, shuffleArrayFunc } from './types';
import KnockingModal from '../knockingModal';
import shuffleArray from './tools';

const Feed: React.FC = () => {
  const users = useAppSelector((state) => state.allUsers.data);

  // const { TextArea } = Input;
  const mentors = users.filter((user) => user.isMentor && user.isActive);
  shuffleArray(mentors, 8);
  const [mentorId, setMentorId] = React.useState('');
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  //  срабатывает на кнопку "постучаться"
  const showModal: modalFunc = (id1) => {
    setMentorId(id1);
    setIsModalVisible(true);
  };

  return (
    <>
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
            <UserCard mentor={mentor} showModal={showModal} />
          </List.Item>
        )}
      />
      <KnockingModal
        mentorId={mentorId}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </>
  );
};

export default Feed;
