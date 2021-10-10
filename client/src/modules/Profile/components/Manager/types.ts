import { IMeet } from '../../../../types/usersTypes';

interface IManagerProps {
  meets: IMeet[] | false
  changeMeetsStatus: (status: string, id: string) => void
}

export interface IMeetStatus {
  status: 'pending' | 'cancelled' | 'completed' | 'accepted'
}

export default IManagerProps;
