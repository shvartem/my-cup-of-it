export interface IFeedback {
  id: string,
  title: string,
  description: string,
  status: 'complete' | 'accept' | 'pending' | 'reject',
  userId: string,
  firstname: string,
  lastname: string,
}

export interface IFeedbackState {
  data: IFeedback[],
  isLoading: boolean,
  error: string | null,
}
