import React from 'react';
import { Button } from 'antd';
import { IMeetButton } from './types';

export const CloseMeetButton: React.FC<IMeetButton> = ({ clickHandler }) => (
  <Button onClick={clickHandler}>Встеча состоялась</Button>
);

export const CancelMeetButton: React.FC<IMeetButton> = ({ clickHandler }) => (
  <Button onClick={clickHandler}>Oтменить встречу</Button>
);

export const AcceptMeetButton: React.FC<IMeetButton> = ({ clickHandler }) => (
  <Button onClick={clickHandler}>Принять встречу</Button>
);

export const DeclineMeetButton: React.FC<IMeetButton> = ({ clickHandler }) => (
  <Button onClick={clickHandler}>Отклонить встречу</Button>
);
