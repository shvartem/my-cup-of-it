import React from 'react';
import { Button } from 'antd';
import { BtnsWrapper } from '../style';
import { IEditButtons } from '../types';
import EditUserProfileModal from './EditUserModal/EditUserModal';

const EditProfileButtons: React.FC<IEditButtons> = ({
  profileData, isMentor, isActive, changeRole, changeStatus, editProfile,
}) => (
  <BtnsWrapper>
    <Button type="primary" onClick={changeRole}>
      {isMentor ? 'Перестать быть ментором' : 'Cтать ментором'}
    </Button>
    <EditUserProfileModal editProfile={editProfile} profileData={profileData} />
    <Button onClick={changeStatus}>
      {isActive ? 'Сменить статус на неактивный' : 'Сменить статус на активный'}
    </Button>
  </BtnsWrapper>
);

export default EditProfileButtons;
