export interface IInitialCompaniesState {
  data: ICompany[];
  isLoading: boolean;
  error: string | null;
}

interface ICompany {
  id: string,
  title: string
}
