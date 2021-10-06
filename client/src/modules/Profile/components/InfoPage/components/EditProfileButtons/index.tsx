import React from 'react';
import { Button } from 'antd';
import { BtnsWrapper } from '../../style';

const EditProfileButtons: React.FC = () => (
  <BtnsWrapper>
    <Button type="primary">Cтать ментором</Button>
    <Button>Изменить профиль</Button>
    <Button>Изменить статус</Button>
  </BtnsWrapper>
);

export default EditProfileButtons;
