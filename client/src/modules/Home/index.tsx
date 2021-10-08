import React, { FC } from 'react';
import styles from './home.module.css';
import Info from './componenets/Info';
import Feed from './componenets/Feed';

const Home: React.FC = () => (
  (
    <>
      <Info />
      <Feed />
    </>
  )

);

export default Home;
