import ISocial from '../../../../types/socialsTypes';
import { IProfile } from '../../../../types/usersTypes';

export interface IInfoPageProps {
  isMe: boolean;
  profileData: any;
}

export interface IEditButtons {
  profileData: IProfile;
  changeRole: () => void;
  changeStatus: () => void;
  editProfile: (values: IProfile) => void
  editSocials: (values: ISocial[]) => void
}

export interface IEditUserProfile {
  profileData: IProfile;
  editProfile: (values: IProfile) => void
}

export interface IEditSocials {
  socials: ISocial[];
  editSocials: (values: ISocial[]) => void
}

export interface IEditUserProfileForm extends IEditUserProfile {
  form: any
}

export interface IEditSocialsForm extends IEditSocials {
  form: any
}
