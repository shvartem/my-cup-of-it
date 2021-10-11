import React from 'react';
import { Empty, List } from 'antd';

import FeedbackCard from '../FeedbackCard';
import { FeedbackButtonClickType } from '../FeedbackCard/types';
import { IFeedbackListProps } from './types';

// const listData: IFeedback[] = [];
// for (let i = 0; i < 23; i += 1) {
//   listData.push({
//     id: String(i + 1),
//     title: `ant design part ${i}`,
//     description:
//       'Ant Design, a design language for background applications, is refined by Ant UED Team.',
//     status: 'pending',
//     userId: '206802',
//     firstname: 'Leanne',
//     lastname: 'Graham',
//   });
// }

const FeedbackList: React.FC<IFeedbackListProps> = (props) => {
  const { feedbacks } = props;

  const handleCompleteFeedback: FeedbackButtonClickType = (request) => {
    console.log(request);
  };

  const handleAcceptFeedback: FeedbackButtonClickType = (request) => {
    console.log(request);
  };

  const handleRejectFeedback: FeedbackButtonClickType = (request) => {
    console.log(request);
  };

  if (!feedbacks.length) {
    return (
      <Empty description="Заявок пока нет" />
    );
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 10,
      }}
      dataSource={feedbacks}
      renderItem={(feedback) => (
        <List.Item key={feedback.id}>
          <FeedbackCard
            feedback={feedback}
            onComplete={handleCompleteFeedback}
            onAccept={handleAcceptFeedback}
            onReject={handleRejectFeedback}
          />
        </List.Item>
      )}
    />
  );
};

export default FeedbackList;
