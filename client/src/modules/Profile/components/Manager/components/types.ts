import { ReactElement } from 'react';

export interface IMeetButton {
  clickHandler: () => void;
}

export interface IMeetCard {
  buttons: ReactElement<IMeetButton>[]
}
