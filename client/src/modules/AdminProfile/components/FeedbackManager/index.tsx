import React, { useEffect } from 'react';
import { Tabs } from 'antd';

import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { actions } from '../../../../redux/slices';
import FeedbackList from '../FeedbackList';
import { IFeedback } from '../../../../types/feedbacksTypes';

const { TabPane } = Tabs;

const FeedbackManager: React.FC = () => {
  const dispatch = useAppDispatch();
  const feedbacks = useAppSelector((state) => state.feedbacks.data);
  console.log({ feedbacks });

  const getFeedbacks = (status:string): IFeedback[] => feedbacks.filter(
    (feedback: IFeedback): boolean => feedback.status === status,
  );

  const pendingFeedbacks = getFeedbacks('pending');
  const acceptFeedbacks = getFeedbacks('accept');
  const completeFeedbacks = getFeedbacks('complete');
  const rejectFeedbacks = getFeedbacks('reject');

  function callback(key: string) {
    console.log(key);
  }

  useEffect(() => {
    dispatch(actions.getAllFeedbacksPending());
  }, [dispatch]);

  return (
    <Tabs onChange={callback} type="line">
      <TabPane tab="Все" key="all">
        <FeedbackList feedbacks={feedbacks} />
      </TabPane>
      <TabPane tab="Ожидающие" key="pending">
        <FeedbackList feedbacks={pendingFeedbacks} />
      </TabPane>

      <TabPane tab="В работе" key="accept">
        <FeedbackList feedbacks={acceptFeedbacks} />
      </TabPane>

      <TabPane tab="Исполненные" key="complete">
        <FeedbackList feedbacks={completeFeedbacks} />
      </TabPane>

      <TabPane tab="Отклоненные" key="reject">
        <FeedbackList feedbacks={rejectFeedbacks} />
      </TabPane>
    </Tabs>
  );
};

export default FeedbackManager;
