import React, { FC, useEffect } from 'react';
import { List, Modal, Input } from 'antd';
import styled from 'styled-components';
import KnockingModal from '../../Home/componenets/knockingModal/index';
import { modalFunc } from '../../Home/componenets/Feed/types';
import UserCard from '../../Home/componenets/UserCard/index';
import { FeedProps } from './types';

const FeedForModal: React.FC<FeedProps> = ({ mentors }) => {
//   const Container = styled.div`
//   width: 80%;
//   // margin: 50px auto 30px;
// `;

  const CardsWrapper = styled.div`
  margin: 5rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
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
            <CardsWrapper>
              <UserCard mentor={mentor} showModal={showModal} />
            </CardsWrapper>
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
export default FeedForModal;
