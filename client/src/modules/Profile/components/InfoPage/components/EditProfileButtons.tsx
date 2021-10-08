import React from 'react';
import { Button } from 'antd';
import { BtnsWrapper, ModalWrapper } from '../style';
import { IEditButtons } from '../types';
import ModalForm from '../../../../common/Modal';

const EditProfileButtons: React.FC<IEditButtons> = ({
  isMentor, isActive, changeRole, changeStatus, editProfile, formItems,
}) => (
  <BtnsWrapper>
    <Button type="primary" onClick={changeRole}>
      {isMentor ? 'Перестать быть ментором' : 'Cтать ментором'}
    </Button>
    <ModalWrapper>
      <ModalForm title="Изменить профиль" formItems={formItems} submitHandler={editProfile} />
    </ModalWrapper>
    <Button onClick={changeStatus}>
      {isActive ? 'Сменить статус на неактивный' : 'Сменить статус на активный'}
    </Button>
  </BtnsWrapper>
);

export default EditProfileButtons;
