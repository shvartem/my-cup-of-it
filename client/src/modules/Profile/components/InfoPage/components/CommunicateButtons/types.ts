import React from 'react';

export interface ICommunicateButtons {
  isActive: boolean,
  onKnock: React.Dispatch<React.SetStateAction<boolean>>
}
