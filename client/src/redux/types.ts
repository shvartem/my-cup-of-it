interface IMeets {
  id: string,
  firstname: string,
  lastname: string,
  status: string,
  comment: string,
  date: string,
}

export interface IProfile {
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  description: string,
  isMentor: boolean,
  isActive: boolean,
  careerStart?: string,
  company?: string,
  meets: IMeets[],
  createdAt: string,
  updatedAt: string,
}

export interface ILoginData {
  email: string,
  password: string,
}

export interface IRegisterData extends IProfile{
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

export type ErrorType = string | null
