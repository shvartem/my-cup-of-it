import React from 'react';

import MeetCard from './MeetCardTab';
import IManagerProps from '../types';
import { IMeet } from '../../../../../types/usersTypes';
import CustomButton from './CustomButton';

const SuggestionsTab: React.FC<IManagerProps> = ({ meets, changeMeetsStatus }) => (
  <>
    {(meets && meets.length)
      ? meets.map((el: IMeet) => (
        <MeetCard
          key={el.id}
          buttons={[
            <CustomButton key="1" buttonText="Принять встречу" clickHandler={() => changeMeetsStatus('accepted', el.id)} />,
            <CustomButton key="2" buttonText="Отклонить встречу" clickHandler={() => changeMeetsStatus('cancelled', el.id)} />,
          ]}
          meetData={el}
        />
      )) : <p>У вас пока нет предложений встретиться</p>}
  </>
);

export default SuggestionsTab;
