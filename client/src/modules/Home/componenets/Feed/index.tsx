import React, { FC } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import {
  Button, List, Modal, Input,
} from 'antd';
import UserCard from '../UserCard';
import { useAppSelector } from '../../../../hooks';
import Spinner from '../../../common/Spinner';

import { modalFunc, modalFuncHandle, shuffleArrayFunc } from './types';
import KnockingModal from '../knockingModal';
import shuffleArray from './tools';

const Container = styled.div`
  width: 80%;
  margin: 50px auto 30px;
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Feed: React.FC = () => {
  const users = useAppSelector((state) => state.allUsers.data);
  // const { TextArea } = Input;
  const mentors = users.filter((user) => user.isMentor && user.isActive);
  shuffleArray(mentors, 8);
  const [mentorId, setMentorId] = React.useState('');
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  //  срабатывает на кнопку "постучаться"
  const showModal = (id1: string) => {
    setMentorId(id1);
    setIsModalVisible(true);
  };

  if (!users.length) {
    return (
      <Spinner />
    );
  }
  return (
    <Container>
      <h1>Часть наших профecсионалов</h1>
      <CardsWrapper>
        <UserCard mentor={users[0]} showModal={showModal} />
        <UserCard mentor={users[0]} showModal={showModal} />
        <UserCard mentor={users[0]} showModal={showModal} />
        <UserCard mentor={users[0]} showModal={showModal} />
      </CardsWrapper>
      <div style={{ textAlign: 'center', margin: '15px 0' }}>
        <Button>Посмотреть еще</Button>
      </div>
    </Container>
  );
};

export default Feed;
