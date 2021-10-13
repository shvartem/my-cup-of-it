import React from 'react';
import { Button } from 'antd';
import { BtnsWrapper } from '../../style';
import { ICommunicateButtons } from './types';

const CommunicateButtons: React.FC<ICommunicateButtons> = (props) => {
  const { isActive, onKnock } = props;

  const handleKnockButton = () => {
    onKnock(true);
  };

  return (
    <BtnsWrapper>
      <Button type="primary" disabled={!isActive} onClick={handleKnockButton}>Постучаться</Button>
    </BtnsWrapper>
  );
};

export default CommunicateButtons;