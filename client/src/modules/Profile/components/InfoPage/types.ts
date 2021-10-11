import { IProfile } from '../../../../types/usersTypes';

export interface IInfoPageProps {
  isMe: boolean;
  profileData: any;
}

export interface IEditButtons {
  profileData: IProfile;
  isActive: boolean;
  isMentor: boolean;
  changeRole: () => void;
  changeStatus: () => void;
  editProfile: (values: IProfile) => void
}

export interface IEditUserProfile {
  profileData: IProfile;
  editProfile: (values: IProfile) => void
}

export interface IEditUserProfileForm extends IEditUserProfile {
  form: any
}
