import { IProfile } from '../../../../types/usersTypes';
import { modalFunc } from '../Feed/types';

export type MyCard = {
  mentor: IProfile;
  showModal: modalFunc;
}
