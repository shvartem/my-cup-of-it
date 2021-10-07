import MeetCard from './MeetCardTab';
import { CloseMeetButton, CancelMeetButton } from './MeetCardButtons';

const FeatureMeets = () => (
  <MeetCard buttons={[
    <CloseMeetButton key="1" clickHandler={() => console.log(1)} />,
    <CancelMeetButton key="2" clickHandler={() => console.log(1)} />,
  ]}
  />
);

export default FeatureMeets;
