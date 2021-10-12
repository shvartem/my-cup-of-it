import React, { useState } from 'react';
import { Alert } from 'antd';
import RegisterStepOne from '../RegisterStep1';
import RegisterStepTwo from '../RegisterStep2';
import { IRegisterData } from '../../../../types/usersTypes';
import { Container, ShowFormContainer } from '../style';
import { useAppSelector } from '../../../../hooks';

export const initialRegisterFormValues: IRegisterData = {
  id: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  description: '',
  isMentor: false,
  careerStart: '',
  company: '',
  position: '',
  isActive: false,
  userPhoto: '',
  technologies: [],
  socials: [],
};

const RegisterPage: React.FC = () => {
  const error = useAppSelector((state) => state.user.error);
  const [registerData, setRegisterData] = useState(initialRegisterFormValues);
  const [formStep, setFormStep] = useState(1);

  return (
    <Container>
      {error && (
        <Alert
          // style={{ position: 'absolute', top: 80, right: 30 }}
          banner
          message={error}
          type="error"
          closable
        />
        // <div style={{ color: 'red', fontSize: '20px' }}>{error}</div>
      )}
      <ShowFormContainer isOpen={formStep === 1}>
        <RegisterStepOne registerData={registerData} setRegisterData={setRegisterData} setFormStep={setFormStep} />
      </ShowFormContainer>
      <ShowFormContainer isOpen={formStep === 2}>
        <RegisterStepTwo registerData={registerData} setRegisterData={setRegisterData} setFormStep={setFormStep} />
      </ShowFormContainer>
    </Container>
  );
};
export default RegisterPage;
