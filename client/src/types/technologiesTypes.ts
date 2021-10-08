export interface ITechnology {
  id: string,
  category: string,
  title: string,
}

export interface ITechnologiesState {
  data: ITechnology[],
  isLoading: boolean,
  error: string | null,
}
