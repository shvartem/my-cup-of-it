import React from 'react';
import { List } from 'antd';
import IManagerProps from '../types';
import MeetCard from './MeetCardTab';
import CustomButton from './CustomButton';
import { IMeet } from '../../../../../types/usersTypes';

const CancelledMeetsTab: React.FC<IManagerProps> = ({ meets, changeMeetsStatus, isMentor }) => (
  <>
    {meets && !!meets.length && (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 10,
        }}
        dataSource={meets}
        renderItem={(meet) => (
          <List.Item key={meet.id}>
            <MeetCard
              key={meet.id}
              buttons={isMentor ? [
                <CustomButton key="1" buttonText="Принять встречу" clickHandler={() => changeMeetsStatus('accepted', meet.id)} />,
              ] : []}
              meetData={meet}
              isMentor={isMentor}
            />
          </List.Item>
        )}
      />
    )}
  </>
);

export default CancelledMeetsTab;
