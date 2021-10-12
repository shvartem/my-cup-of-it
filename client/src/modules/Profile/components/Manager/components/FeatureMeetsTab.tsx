import React from 'react';
import IManagerProps from '../types';
import MeetCard from './MeetCardTab';
import CustomButton from './CustomButton';
import { IMeet } from '../../../../../types/usersTypes';

const FeatureMeets: React.FC<IManagerProps> = ({ meets, changeMeetsStatus, isMentor }) => (
  <>
    {(meets && meets.length)
      ? meets.map((el: IMeet) => (
        <MeetCard
          key={el.id}
          buttons={isMentor ? [
            <CustomButton buttonText="Встреча состоялась" key="1" clickHandler={() => changeMeetsStatus('completed', el.id)} />,
            <CustomButton buttonText="Отменить встречу" key="2" clickHandler={() => changeMeetsStatus('cancelled', el.id)} />,
          ]
            : [<CustomButton buttonText="Отменить встречу" key="2" clickHandler={() => changeMeetsStatus('cancelled', el.id)} />]}
          meetData={el}
          isMentor={isMentor}
        />
      )) : <p>У вас нет предстоящих встреч</p>}
  </>
);

export default FeatureMeets;
