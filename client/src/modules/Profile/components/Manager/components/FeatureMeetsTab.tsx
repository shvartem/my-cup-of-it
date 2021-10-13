import React from 'react';
import { List } from 'antd';
import IManagerProps from '../types';
import MeetCard from './MeetCardTab';
import CustomButton from './CustomButton';
import { IMeet } from '../../../../../types/usersTypes';

const FeatureMeets: React.FC<IManagerProps> = ({ meets, changeMeetsStatus, isMentor }) => (
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
                <CustomButton buttonText="Встреча состоялась" key="1" clickHandler={() => changeMeetsStatus('completed', meet.id)} />,
                <CustomButton buttonText="Отменить встречу" key="2" clickHandler={() => changeMeetsStatus('cancelled', meet.id)} />,
              ]
                : [<CustomButton buttonText="Отменить встречу" key="2" clickHandler={() => changeMeetsStatus('cancelled', meet.id)} />]}
              meetData={meet}
              isMentor={isMentor}
            />
          </List.Item>
        )}
      />
    )}

  </>
);

export default FeatureMeets;
