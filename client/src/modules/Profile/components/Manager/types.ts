import { IMeet } from '../../../../types/usersTypes';

interface IManagerProps {
  isMentor: boolean
  meets: IMeet[] | false
  changeMeetsStatus: (status: string, id: string) => void
}

export interface IMeetStatus {
  status: 'pending' | 'cancelled' | 'completed' | 'accepted'
}

export default IManagerProps;
