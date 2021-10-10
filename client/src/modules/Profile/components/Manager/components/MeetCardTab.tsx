import React from 'react';
import { Card } from 'antd';
import { IMeetCard } from './types';

const MeetCard: React.FC<IMeetCard> = ({ buttons, meetData }) => (
  <Card type="inner" title={`От: ${meetData.firstname} ${meetData.lastname}`} extra={buttons} style={{ margin: '30px 0' }}>
    <p>Дата: 12.10.2021</p>
    <p>{`${meetData.comment}`}</p>
  </Card>
);

export default MeetCard;
