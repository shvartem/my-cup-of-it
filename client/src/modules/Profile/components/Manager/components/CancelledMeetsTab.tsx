import React from 'react';
import IManagerProps from '../types';
import MeetCard from './MeetCardTab';
import CustomButton from './CustomButton';
import { IMeet } from '../../../../../types/usersTypes';

const CancelledMeetsTab: React.FC<IManagerProps> = ({ meets, changeMeetsStatus }) => (
  <>
    {(meets && meets.length)
      ? meets.map((el: IMeet) => (
        <MeetCard
          key={el.id}
          buttons={[
            <CustomButton key="1" buttonText="Принять встречу" clickHandler={() => changeMeetsStatus('accepted', el.id)} />,
          ]}
          meetData={el}
        />
      )) : <p>У вас нет отмененных встреч</p>}
  </>
);

export default CancelledMeetsTab;
