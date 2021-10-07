export interface ILoginValues {
  email: string,
  password: string,
}

export type LoginSubmitType = (values: ILoginValues) => void
