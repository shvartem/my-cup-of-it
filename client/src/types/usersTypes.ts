import { ITechnology } from './technologiesTypes';
import ISocial from './socialsTypes';

export interface IMeet {
  id: string,
  firstname: string,
  lastname: string,
  status: string,
  date: string,
  comment: string,
}

export interface IProfile {
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  description: string,
  isMentor: boolean,
  isActive: boolean,
  careerStart: string,
  company: string,
  position: string;
  userPhoto: string,
  technologies: ITechnology[],
  socials: ISocial[]
}

export interface IMyProfile extends IProfile {
  meets: IMeet[],
}

export interface IAllUsersState {
  data: IProfile[],
  isLoading: boolean,
  error: string | null,
}

export interface IMyProfileState {
  profile: IMyProfile;
  isLoading: boolean;
  error: string | null
}

export interface ILoginData {
  email: string,
  password: string,
}

export interface IRegisterData extends IProfile {
  password: string,
}

export interface ILoginUserAction {
  type: string,
  payload: ILoginData,
}
export interface IRegisterUserAction {
  type: string,
  payload: IRegisterData,
}
export interface IEditUserProfileAction {
  type: string,
  payload: IMyProfile,
}

export interface IEditProfileStatusAction {
  type: string,
  payload: IEditProfileStatusPayload
}

export interface IEditProfileStatusPayload {
  id: string;
  isActive: boolean
}

export interface IEditProfileRoleAction {
  type: string,
  payload: IEditProfileRolePayload
}

export interface IEditProfileRolePayload {
  id: string;
  isMentor: boolean
}

export interface IChangeMeetStatusAction {
  type: string,
  payload: IChangeMeetStatusPayload
}

export interface IChangeMeetStatusPayload {
  id: string,
  status: string
}

export interface IEditUserSocialsAction {
  type: string,
  payload: IChangeMeetStatusPayload
}

export interface IEditUserSocialsPayload {
  id: string,
  status: string
}
