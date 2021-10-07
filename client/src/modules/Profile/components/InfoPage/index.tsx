import React from 'react';
import { Image, Card } from 'antd';
import EditProfileButtons from './components/EditProfileButtons';
import { Container, CardWrapper, ImageWrapper } from './style';
import CommunicateButtons from './components/CommunicateButtons';
import IInfoPageProps from './components/types';

const InfoPage: React.FC<IInfoPageProps> = ({ isAuth }) => (
  <>
    <Container>
      <ImageWrapper>
        <Image
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        {
          isAuth ? <EditProfileButtons /> : <CommunicateButtons />
        }
      </ImageWrapper>
      <CardWrapper>
        <Card title="Oбо мне">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Distinctio ea, nobis perferendis sint fugit amet rem ipsa.
            Error repellendus quisquam quo aperiam reprehenderit.
            Voluptatem porro harum at, quis voluptas dignissimos.
          </p>
          <p>Компания: Google</p>
          <p>Опыт работы: 10 лет</p>
        </Card>
      </CardWrapper>
    </Container>
  </>
);

export default InfoPage;
