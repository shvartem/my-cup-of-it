import React from 'react';

import MeetCard from './MeetCardTab';
import IManagerProps from '../types';
import { IMeet } from '../../../../../types/usersTypes';
import CustomButton from './CustomButton';

const SuggestionsTab: React.FC<IManagerProps> = ({ meets, changeMeetsStatus, isMentor }) => (
  <>
    {(meets && meets.length)
      ? meets.map((el: IMeet) => (
        <MeetCard
          key={el.id}
          buttons={isMentor ? [
            <CustomButton key="1" buttonText="Принять встречу" clickHandler={() => changeMeetsStatus('accepted', el.id)} />,
            <CustomButton key="2" buttonText="Отклонить встречу" clickHandler={() => changeMeetsStatus('cancelled', el.id)} />,
          ] : [<CustomButton key="1" buttonText="Отменить встречу" clickHandler={() => changeMeetsStatus('cancelled', el.id)} />]}
          meetData={el}
          isMentor={isMentor}
        />
      )) : <p>У вас пока нет предложений встретиться</p>}
  </>
);

export default SuggestionsTab;
