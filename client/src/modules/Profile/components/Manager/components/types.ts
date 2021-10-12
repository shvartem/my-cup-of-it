import { ReactElement } from 'react';
import { IMeet } from '../../../../../types/usersTypes';

export interface IMeetButton {
  buttonText: string
  clickHandler: () => void;
}

export interface IMeetCard {
  isMentor: boolean
  buttons: ReactElement<IMeetButton>[] | []
  meetData: IMeet
}
