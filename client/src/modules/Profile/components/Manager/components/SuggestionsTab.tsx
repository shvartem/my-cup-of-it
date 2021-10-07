import MeetCard from './MeetCardTab';
import { AcceptMeetButton, DeclineMeetButton } from './MeetCardButtons';

const SuggestionsTab = () => (
  <MeetCard buttons={[
    <AcceptMeetButton key="1" clickHandler={() => console.log(1)} />,
    <DeclineMeetButton key="2" clickHandler={() => console.log(1)} />,
  ]}
  />
);

export default SuggestionsTab;
