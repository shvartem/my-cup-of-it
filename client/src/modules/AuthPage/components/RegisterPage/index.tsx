import React, { useState } from 'react';
import styled from 'styled-components';
import RegisterStepOne from '../RegisterStep1';
import RegisterStepTwo from '../RegisterStep2';
import { IRegisterData } from '../../../../types/usersTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;
interface IShowFormContainer {
  isOpen: boolean;
}

const ShowFormContainer = styled.div<IShowFormContainer>`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
`;

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
  isActive: false,
  userPhoto: '',
  technologies: [],
};

const RegisterPage: React.FC = () => {
  const [registerData, setRegisterData] = useState(initialRegisterFormValues);
  const [formStep, setFormStep] = useState(1);

  return (
    <Container>
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
