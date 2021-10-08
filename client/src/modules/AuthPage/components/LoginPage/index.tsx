import React from 'react';

import { Button, Form, Input } from 'antd';
import styled from 'styled-components';

import { useAppDispatch } from '../../../../hooks';
import { actions } from '../../../../redux/slices';

import { LoginSubmitType } from './types';

const Container = styled.div`
  margin: 50px auto;
`;

const initialLoginFormValues = {
  email: '',
  password: '',
};

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit: LoginSubmitType = (values) => {
    dispatch(actions.loginUserPending(values));
  };

  return (
    <Container>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 8,
        }}
        initialValues={initialLoginFormValues}
        onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Ваш email"
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
          label="Ваш пароль"
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

export default LoginPage;
