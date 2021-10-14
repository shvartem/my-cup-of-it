import React from 'react';
import { Card } from 'antd';
import { IMeetCard } from './types';

const MeetCard: React.FC<IMeetCard> = ({ buttons, meetData, isMentor }) => (
  <Card
    type="inner"
    title={`С ${meetData.firstname} ${meetData.lastname}`}
    extra={buttons}
  >
    <p>
      Дата:
      {' '}
      {meetData.date}
    </p>
    <p>{`${meetData.comment}`}</p>
  </Card>
);

export default MeetCard;
