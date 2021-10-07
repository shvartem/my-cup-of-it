import React from 'react';
import { Tabs } from 'antd';
import FeatureMeets from './components/FeatureMeetsTab';
import PastMeets from './components/PastMeets';
import SuggestionsTab from './components/SuggestionsTab';

const { TabPane } = Tabs;

const Manager: React.FC = () => (
  <>
    <Tabs defaultActiveKey="1">
      <TabPane tab="Предстоящие встречи" key="1">
        <FeatureMeets />
      </TabPane>
      <TabPane tab="Прошедшие встречи" key="2">
        <PastMeets />
      </TabPane>
      <TabPane tab="Предложения" key="3">
        <SuggestionsTab />
      </TabPane>
    </Tabs>
  </>
);

export default Manager;
