import React from 'react';

import MeetCard from './MeetCardTab';
import IManagerProps from '../types';
import { IMeet } from '../../../../../types/usersTypes';
import { AcceptMeetButton, DeclineMeetButton } from './MeetCardButtons';

const SuggestionsTab: React.FC<IManagerProps> = ({ meets, changeMeetsStatus }) => (
  <>
    {(meets && meets.length)
      ? meets.map((el: IMeet) => (
        <MeetCard
          key={el.id}
          buttons={[
            <AcceptMeetButton key="1" clickHandler={() => changeMeetsStatus('accepted', el.id)} />,
            <DeclineMeetButton key="2" clickHandler={() => changeMeetsStatus('cancelled', el.id)} />,
          ]}
          meetData={el}
        />
      )) : <p>У вас пока нет предложений встретиться</p>}
  </>
);

export default SuggestionsTab;
