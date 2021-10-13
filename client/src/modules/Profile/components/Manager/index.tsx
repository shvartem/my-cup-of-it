import React from 'react';
import { Tabs } from 'antd';
import FeatureMeets from './components/FeatureMeetsTab';
import PastMeets from './components/PastMeetsTab';
import SuggestionsTab from './components/SuggestionsTab';
import IManagerProps from './types';
import CancelledMeetsTab from './components/CancelledMeetsTab';
import { IMeet } from '../../../../types/usersTypes';

const { TabPane } = Tabs;

function getMeetsByStatus(status: string, meets: IMeet[] | false) {
  return (meets && meets.length) ? meets.filter((meet: IMeet) => meet.status === status) : false;
}

const Manager: React.FC<IManagerProps> = ({ isMentor, meets, changeMeetsStatus }) => {
  const pendingMeets = getMeetsByStatus('pending', meets);
  const cancelledMeets = getMeetsByStatus('cancelled', meets);
  const completedMeets = getMeetsByStatus('completed', meets);
  const acceptedMeets = getMeetsByStatus('accepted', meets);

  return (
    <Tabs>
      <TabPane tab="Предстоящие встречи" key="1">
        <FeatureMeets meets={acceptedMeets} changeMeetsStatus={changeMeetsStatus} isMentor={isMentor} />
      </TabPane>
      <TabPane tab="Прошедшие встречи" key="2">
        <PastMeets meets={completedMeets} changeMeetsStatus={changeMeetsStatus} isMentor={isMentor} />
      </TabPane>
      <TabPane tab={isMentor ? 'Предложения' : 'Moи заявки'} key="3">
        <SuggestionsTab meets={pendingMeets} changeMeetsStatus={changeMeetsStatus} isMentor={isMentor} />
      </TabPane>
      <TabPane tab="Отмененные" key="4">
        <CancelledMeetsTab meets={cancelledMeets} changeMeetsStatus={changeMeetsStatus} isMentor={isMentor} />
      </TabPane>
    </Tabs>
  );
};

export default Manager;
