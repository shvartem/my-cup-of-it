import React from 'react';
import { Tabs } from 'antd';

import FeedbackManager from './components/FeedbackManager';
import { Container, InnerContainer } from './style';

const { TabPane } = Tabs;

const AdminProfile: React.FC = () => {
  function callback(key: string) {
    console.log(key);
  }

  return (
    <Container>
      <InnerContainer>
        <Tabs onChange={callback} type="card">
          <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane tab="Заявки" key="2">
            <FeedbackManager />
          </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </InnerContainer>
    </Container>
  );
};

export default AdminProfile;
