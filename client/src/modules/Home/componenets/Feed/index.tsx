import React, { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import UserCard from '../UserCard';
import { useAppSelector } from '../../../../hooks';
import Container from '../style';
import Spinner from '../../../common/Spinner';

const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Feed: React.FC = () => {
  const users = useAppSelector((state) => state.allUsers.data);
  const activeMentors = users.filter((user) => user.isActive && user.isActive);

  if (!users.length) {
    return (
      <Spinner />
    );
  }
  return (
    <Container>
      <h1>Часть наших профecсионалов</h1>
      <CardsWrapper>
        <UserCard mentor={users[0]} />
        <UserCard mentor={users[0]} />
        <UserCard mentor={users[0]} />
        <UserCard mentor={users[0]} />
      </CardsWrapper>
      <div style={{ textAlign: 'center', margin: '15px 0' }}>
        <Button>Посмотреть еще</Button>
      </div>
    </Container>
  );
};

export default Feed;
