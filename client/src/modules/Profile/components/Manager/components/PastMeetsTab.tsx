import React from 'react';
import { List } from 'antd';
import CustomButton from './CustomButton';
import MeetCard from './MeetCardTab';
import IManagerProps from '../types';
import { IMeet } from '../../../../../types/usersTypes';

const PastMeets: React.FC<IManagerProps> = ({ meets, changeMeetsStatus, isMentor }) => (
  <>
    {(meets && !!meets.length) && (
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
                <CustomButton buttonText="Вернуть встречу в предстоящие" key="1" clickHandler={() => changeMeetsStatus('accepted', meet.id)} />,
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

export default PastMeets;
