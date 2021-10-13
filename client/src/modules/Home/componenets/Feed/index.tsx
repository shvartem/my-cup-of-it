import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Button, Alert } from 'antd';
import { useAppSelector } from '../../../../hooks';
import Spinner from '../../../common/Spinner';

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
  const history = useHistory();
  const users = useAppSelector((state) => state.allUsers.data);
  const error = useAppSelector((state) => state.allUsers.error);
  const activeMentors = users.filter((user) => user.isMentor && user.isActive);
  const randomMentors = shuffleArray(activeMentors, 8);

  const handleButtonClick = () => {
    history.push('/users');
  };

  if (!users.length) {
    return (
      <Spinner />
    );
  }
  return (
    <Container>
      {users.length === 0 && (
      <Alert
        banner
        message="Пока нет ни одного ментора"
        type="info"
        closable
      />
      )}
      {error && (
      <Alert
        banner
        message={error}
        type="error"
        closable
      />
      )}

      <h1>Часть наших профecсионалов</h1>

      <FeedForModal mentors={randomMentors} />

      <div style={{ textAlign: 'center', margin: '15px 0' }}>

        <Button onClick={handleButtonClick}>Посмотреть еще</Button>
      </div>
    </Container>
  );
};

export default Feed;
