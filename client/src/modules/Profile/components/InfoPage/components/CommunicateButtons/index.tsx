import React from 'react';
import { Button } from 'antd';
import { BtnsWrapper } from '../../style';

const CommunicateButtons: React.FC = () => (
  <BtnsWrapper>
    <Button type="primary">Постучаться</Button>
    <Button>Подписаться</Button>
  </BtnsWrapper>
);

export default CommunicateButtons;
