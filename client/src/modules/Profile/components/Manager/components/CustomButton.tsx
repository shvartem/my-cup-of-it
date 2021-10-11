import React from 'react';
import { Button } from 'antd';
import { IMeetButton } from './types';

const CustomButton: React.FC<IMeetButton> = ({ clickHandler, buttonText }) => (
  <Button onClick={clickHandler} style={{ margin: '0 10px' }}>{buttonText}</Button>
);

export default CustomButton;
