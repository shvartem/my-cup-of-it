export interface ITechnologies {
  id: string,
  category: string,
  title: string,
}

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
  userPhoto: string,
  technologies: ITechnologies[],
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
export interface IEditUserAction {
  type: string,
  payload: IProfile,
}
