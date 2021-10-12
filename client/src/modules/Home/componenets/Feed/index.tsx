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
import FeedForModal from '../../../common/feedForModal';

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

  if (!users.length) {
    return (
      <Spinner />
    );
  }
  return (
    <>
      <h1>Часть наших профecсионалов</h1>

      <FeedForModal mentors={mentors} />

      <div style={{ textAlign: 'center', margin: '15px 0' }}>
        <Button>Посмотреть еще</Button>
      </div>
    </>
  );
};

export default Feed;
