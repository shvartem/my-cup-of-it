import React, { useEffect, useState } from 'react';

import {
  Form, Input, Checkbox, DatePicker, Button,
} from 'antd';
import styled from 'styled-components';

import { actions } from '../../../../redux/slices';
import { useAppDispatch } from '../../../../hooks';

import { OnChangeRegisterValuesType, RegisterSubmitType } from './types';

const Container = styled.div`
  margin: 50px auto;
`;

const initialRegisterFormValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  description: '',
  isMentor: false,
  careerStart: '',
  company: '',
};

const RegisterPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const [registerData, setRegisterData] = useState(initialRegisterFormValues);

  const onSubmit: RegisterSubmitType = (values) => {
    dispatch(actions.registerUserPending(values));
  };

  const onChangeRegisterFormValues: OnChangeRegisterValuesType = (changedValues, allValues) => {
    setRegisterData((prevState) => ({ ...prevState, ...allValues }));
  };

  useEffect(() => {
    console.log(registerData.isMentor);
    if (!registerData.isMentor) {
      setRegisterData((prevState) => ({ ...prevState, careerStart: '', company: '' }));
    }
  }, [registerData.isMentor]);

  return (
    <Container>
      <Form
        onValuesChange={onChangeRegisterFormValues}
        name="registerForm"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={initialRegisterFormValues}
        onFinish={onSubmit}
        autoComplete="off"
      >
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
          <Input />
        </Form.Item>
        <Form.Item
          label="О себе"
          name="description"
          rules={[
            {
              required: true,
              min: 6,
              message: 'Должно быть не менее 6 символов',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          name="isMentor"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Ментор</Checkbox>
        </Form.Item>

        {registerData.isMentor && (
          <>
            <Form.Item
              label="Начало карьеры в разработке"
              name="careerStart"
              rules={[
                {
                  required: true,
                  message: 'Введите дату начала работы',
                },
              ]}
            >
              {/* <Input /> */}
              <DatePicker placeholder="01-01-2021" format="DD-MM-YYYY" />
            </Form.Item>
            <Form.Item
              label="Место работы"
              name="company"
              rules={[
                {
                  required: true,
                  message: 'Введите место работы',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </>
        )}
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
      </Form>
    </Container>
  );
};

export default RegisterPage;
