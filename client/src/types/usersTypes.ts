export interface ITechnologies {
  id: string,
  category: string,
  title: string,
}

export interface IMeet {
  id: string,
  comment: string,
  date: string,
  status: string,
  firstname: string,
  lastname: string,
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
  createdAt: string,
  updatedAt: string,
  technologies: ITechnologies[],
}

export interface IMyProfile extends IProfile{
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
