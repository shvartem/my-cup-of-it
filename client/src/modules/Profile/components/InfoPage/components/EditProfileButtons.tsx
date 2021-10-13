import React from 'react';
import { Button } from 'antd';
import { BtnsWrapper } from '../style';
import { IEditButtons } from '../types';
import EditUserProfileModal from './EditUserModal/EditUserModal';
import EditSocialModal from './EditSocialModal/EditSocialModal';

const EditProfileButtons: React.FC<IEditButtons> = ({
  profileData, changeRole, changeStatus, editProfile, editSocials, disableChangeRole,
}) => (
  <BtnsWrapper>
    <Button
      type="primary"
      onClick={changeRole}
      disabled={disableChangeRole}
    >
      {profileData.isMentor ? 'Перестать быть ментором' : 'Cтать ментором'}
    </Button>
    <EditUserProfileModal editProfile={editProfile} profileData={profileData} />
    {profileData.isMentor && (
      <Button onClick={changeStatus}>
        {profileData.isActive ? 'Сменить статус на неактивный' : 'Сменить статус на активный'}
      </Button>
    )}
    <EditSocialModal socials={profileData.socials} editSocials={editSocials} />
  </BtnsWrapper>
);

export default EditProfileButtons;
