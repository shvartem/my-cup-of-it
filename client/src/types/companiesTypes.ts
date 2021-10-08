export interface ICompaniesState {
  data: ICompany[];
  isLoading: boolean;
  error: string | null;
}

export interface ICompany {
  id: string,
  title: string
}
