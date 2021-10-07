export interface IRegisterValues {
  firstname: string,
  lastname: string,
  email: string,
  password: string,
  description?: string,
  isMentor?: boolean,
  careerStart?: string,
  company?: string,
}

export type RegisterSubmitType = (values: IRegisterValues) => void

export type OnChangeRegisterValuesType = (
  changedValues: {[item: string]: string | boolean },
  allValues: IRegisterValues
) => void
