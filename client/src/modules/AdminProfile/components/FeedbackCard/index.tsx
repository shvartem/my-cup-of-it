import React from 'react';
import { Card } from 'antd';

import FeedbackCardAction from '../FeedbackCardAction';
import { IFeedbackItemProps } from './types';

const FeedbackCard: React.FC<IFeedbackItemProps> = (props) => {
  const {
    feedback, onComplete, onAccept, onReject,
  } = props;

  return (
    <Card
      type="inner"
      title="Сделайте обратную связь"
      extra={<FeedbackCardAction feedback={feedback} onComplete={onComplete} onAccept={onAccept} onReject={onReject} />}
    >
      Inner Card content
    </Card>
  );
};

export default FeedbackCard;
