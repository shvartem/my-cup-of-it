export interface ITechnologies {
  id: string;
  category: string;
  title: string;
}

export interface IUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  meets: any[];
  description: string;
  isMentor: boolean;
  isActive: boolean;
  careerStart?: string;
  company?: string;
  createdAt: string;
  updatedAt: string;
  technologies: ITechnologies[];
}

export interface IInitialAllUsersState {
  data: IUser[];
  isLoading: boolean;
  error: string | null;
}
