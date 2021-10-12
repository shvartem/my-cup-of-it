import React, { useEffect } from 'react';
import { Alert, Tabs } from 'antd';

import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { actions } from '../../../../redux/slices';
import FeedbackList from '../FeedbackList';
import { IFeedback } from '../../../../types/feedbacksTypes';
import { FeedbackButtonClickType } from '../FeedbackCard/types';

const { TabPane } = Tabs;

const FeedbackManager: React.FC = () => {
  const dispatch = useAppDispatch();
  const feedbacks = useAppSelector((state) => state.feedbacks.data);
  const error = useAppSelector((state) => state.feedbacks.error);
  const getFeedbacks = (status:string): IFeedback[] => feedbacks.filter(
    (feedback: IFeedback): boolean => feedback.status === status,
  );

  const pendingFeedbacks = getFeedbacks('pending');
  const acceptedFeedbacks = getFeedbacks('accept');
  const completedFeedbacks = getFeedbacks('complete');
  const rejectedFeedbacks = getFeedbacks('reject');

  function callback(key: string) {
    console.log(key);
  }

  const handleCompleteFeedback: FeedbackButtonClickType = (feedback) => {
    dispatch(actions.changeFeedbackStatusPending({ ...feedback, status: 'complete' }));
  };

  const handleAcceptFeedback: FeedbackButtonClickType = (feedback) => {
    dispatch(actions.changeFeedbackStatusPending({ ...feedback, status: 'accept' }));
  };

  const handleRejectFeedback: FeedbackButtonClickType = (feedback) => {
    dispatch(actions.changeFeedbackStatusPending({ ...feedback, status: 'reject' }));
  };

  useEffect(() => {
    dispatch(actions.getAllFeedbacksPending());
  }, [dispatch]);

  return (
    <>
      {feedbacks.length === 0 && (
      <Alert
        banner
        message="Пока нет ни одной встречи"
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
      <Tabs onChange={callback} type="line">
        <TabPane tab="Все" key="all">
          <FeedbackList
            feedbacks={feedbacks}
            onAcceptFeedback={handleAcceptFeedback}
            onCompleteFeedback={handleCompleteFeedback}
            onRejectFeedback={handleRejectFeedback}
          />
        </TabPane>
        <TabPane tab="Ожидающие" key="pending">
          <FeedbackList
            feedbacks={pendingFeedbacks}
            onAcceptFeedback={handleAcceptFeedback}
            onCompleteFeedback={handleCompleteFeedback}
            onRejectFeedback={handleRejectFeedback}
          />
        </TabPane>

        <TabPane tab="В работе" key="accept">
          <FeedbackList
            feedbacks={acceptedFeedbacks}
            onAcceptFeedback={handleAcceptFeedback}
            onCompleteFeedback={handleCompleteFeedback}
            onRejectFeedback={handleRejectFeedback}
          />
        </TabPane>

        <TabPane tab="Исполненные" key="complete">
          <FeedbackList
            feedbacks={completedFeedbacks}
            onAcceptFeedback={handleAcceptFeedback}
            onCompleteFeedback={handleCompleteFeedback}
            onRejectFeedback={handleRejectFeedback}
          />
        </TabPane>

        <TabPane tab="Отклоненные" key="reject">
          <FeedbackList
            feedbacks={rejectedFeedbacks}
            onAcceptFeedback={handleAcceptFeedback}
            onCompleteFeedback={handleCompleteFeedback}
            onRejectFeedback={handleRejectFeedback}
          />
        </TabPane>
      </Tabs>
    </>
  );
};

export default FeedbackManager;
