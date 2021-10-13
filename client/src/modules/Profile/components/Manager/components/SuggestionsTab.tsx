import React from 'react';
import { List } from 'antd';

import MeetCard from './MeetCardTab';
import IManagerProps from '../types';
import { CustomButton, CustomCancelButton } from './CustomButton';

const SuggestionsTab: React.FC<IManagerProps> = ({ meets, changeMeetsStatus, isMentor }) => (
  <>
    {(meets && !!meets.length) && (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 2,
        }}
        dataSource={meets}
        renderItem={(meet) => (
          <List.Item key={meet.id}>
            <MeetCard
              key={meet.id}
              buttons={isMentor ? [
                <CustomButton key="1" buttonText="Принять встречу" clickHandler={() => changeMeetsStatus('accepted', meet.id)} />,
                <CustomCancelButton key="2" buttonText="Отклонить встречу" clickHandler={() => changeMeetsStatus('cancelled', meet.id)} />,
              ] : [<CustomCancelButton key="1" buttonText="Отменить встречу" clickHandler={() => changeMeetsStatus('cancelled', meet.id)} />]}
              meetData={meet}
              isMentor={isMentor}
            />
          </List.Item>
        )}
      />
    )}

  </>
);

export default SuggestionsTab;
