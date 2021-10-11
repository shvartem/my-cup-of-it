import React from 'react';
import CustomButton from './CustomButton';
import MeetCard from './MeetCardTab';
import IManagerProps from '../types';
import { IMeet } from '../../../../../types/usersTypes';

const PastMeets: React.FC<IManagerProps> = ({ meets, changeMeetsStatus }) => (
  <>
    {(meets && meets.length)
      ? meets.map((el: IMeet) => (
        <MeetCard
          key={el.id}
          buttons={[
            <CustomButton buttonText="Вернуть встречу в предстоящие" key="1" clickHandler={() => changeMeetsStatus('accepted', el.id)} />,
          ]}
          meetData={el}
        />
      )) : <p>У вас нет прошедших встреч</p>}
  </>
);

export default PastMeets;