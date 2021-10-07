export interface IProfileData {
  firstname: string;
  lastname: string;
  photoUrl: string;
  email: string;
  company: string;
  careerStart: string;
  description: string;
  isMentor: boolean;
  isActive: boolean;
  meets: IMeetData[];
}
export interface IMeetData {
  interviewerId: number;
  date: string;
  comment: string;
  status: string;
}
