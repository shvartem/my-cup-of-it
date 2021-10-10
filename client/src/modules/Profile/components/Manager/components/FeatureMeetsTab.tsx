import React from 'react';
import IManagerProps from '../types';
import MeetCard from './MeetCardTab';
import { CloseMeetButton, CancelMeetButton } from './MeetCardButtons';
import { IMeet } from '../../../../../types/usersTypes';

const FeatureMeets: React.FC<IManagerProps> = ({ meets, changeMeetsStatus }) => (
  <>
    {(meets && meets.length)
      ? meets.map((el: IMeet) => (
        <MeetCard
          key={el.id}
          buttons={[
            <CloseMeetButton key="1" clickHandler={() => changeMeetsStatus('completed', el.id)} />,
            <CancelMeetButton key="2" clickHandler={() => changeMeetsStatus('cancelled', el.id)} />,
          ]}
          meetData={el}
        />
      )) : <p>У вас нет предстоящих встреч</p>}
  </>
);

export default FeatureMeets;
