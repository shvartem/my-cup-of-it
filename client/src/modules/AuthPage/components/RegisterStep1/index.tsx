import React, { useEffect } from 'react';
import {
  Form, Input, Checkbox, Button, Card,
} from 'antd';
import {
  OnChangeRegisterValuesType, RegisterSubmitType, IRegisterProps,
} from '../../types';
import { initialRegisterFormValues } from '../RegisterPage';
import { InnerContainer } from '../../../Profile/style';

const RegisterStepOne: React.FC<IRegisterProps> = ({ registerData, setRegisterData, setFormStep }) => {
  const onSubmit: RegisterSubmitType = (values) => {
    setFormStep(2);
  };

  const onChangeRegisterFormValues: OnChangeRegisterValuesType = (changedValues, allValues) => {
    setRegisterData((prevState: any) => ({ ...prevState, ...allValues }));
  };

  useEffect(() => {
    if (!registerData.isMentor) {
      setRegisterData((prevState: any) => ({ ...prevState, careerStart: '', company: '' }));
    }
  }, [registerData.isMentor, setRegisterData]);

  return (
    <Card hoverable title="Регистрация" style={{ width: 500 }}>
      <Form
        onValuesChange={onChangeRegisterFormValues}
        name="registerForm1"
        labelCol={{
          span: 5,
        }}
        initialValues={initialRegisterFormValues}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <InnerContainer>
          <Form.Item
            label="Имя"
            name="firstname"
            rules={[
              {
                required: true,
                message: 'Введите ваше имя',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Фамилия"
            name="lastname"
            rules={[
              {
                required: true,
                message: 'Введите вашу фамилию',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: 'Введите ваш email',
                type: 'email',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                min: 6,
                message: 'Пароль должен быть не менее 6 символов',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="isMentor"
            valuePropName="checked"
            wrapperCol={{ offset: 2, span: 16 }}
          >
            <Checkbox>Ментор</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Продолжить
            </Button>
          </Form.Item>
        </InnerContainer>
      </Form>
    </Card>
  );
};

export default RegisterStepOne;
