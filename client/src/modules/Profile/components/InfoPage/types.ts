import { IProfile } from '../../../../redux/types';
// import { IUser } from '../../../../redux/allUsersTypes';

export interface IInfoPageProps {
  isMe: boolean;
  profileData: any;
}

export interface IEditButtons {
  isActive: boolean;
  isMentor: boolean;
  changeRole: () => void;
  changeStatus: () => void;
  formItems: any[];
  editProfile: (values: IProfile) => void
}
