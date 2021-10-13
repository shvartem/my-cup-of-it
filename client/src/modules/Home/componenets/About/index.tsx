import React from 'react';
import styled from 'styled-components';
import FeedbackModal from './FeedbackModal/FeedbackModal';

const Container = styled.div`
  height: 40vh;
  background-color: #fff;
  display: flex;
`;

const Logo = styled.div`
  width: 50%;
  font-family: 'Lora', serif;
  font-weight: 700;
  font-size: 55px;
  color: #fff;
`;

const LogoWrapper = styled.div`
  background-color: #2b2c3e;
  width: 35%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContactsContainer = styled.div`
  height: 100%;
  padding: 20px 100px;
`;

const ContactsTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
`;

const ContactsInfo = styled.div`
  margin: 20px 0;
  font-size:18px;
`;

const About: React.FC = () => {
  console.log(11);
  return (
    <Container>
      <LogoWrapper>
        <Logo>MY CUP OF IT</Logo>
      </LogoWrapper>
      <ContactsContainer>
        <ContactsTitle>Контакты</ContactsTitle>
        <ContactsInfo>
          <p>
            <a href="tel:+74951234567">+7 (495) 123-45-67</a>
          </p>
          <a href="mailto:ask@htmlbook.ru">mailto:ask@htmlbook.ru</a>
        </ContactsInfo>
        <FeedbackModal />
      </ContactsContainer>
    </Container>
  );
};

export default About;
