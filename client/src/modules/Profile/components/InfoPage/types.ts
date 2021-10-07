import { IProfileData } from '../types';

export interface IInfoPageProps {
  isMe: boolean;
  profileData: IProfileData;
}

export interface IEditButtons {
  isActive: boolean;
  isMentor: boolean;
  changeRole: () => void;
  changeStatus: () => void;
  formItems: any[];
  editProfile: (values: IProfileData) => void
}
