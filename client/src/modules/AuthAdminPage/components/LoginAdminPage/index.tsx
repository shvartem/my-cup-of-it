import React from 'react';
import {
  Card, Form, Input, Button,
} from 'antd';
import styled from 'styled-components';

import { IHandleSubmitAdminForm } from './types';
import { ILoginAdminData } from '../../../../types/adminTypes';

import { useAppDispatch } from '../../../../hooks';
import { actions } from '../../../../redux/slices';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const initialLoginAdminFormValues: ILoginAdminData = {
  admin: '',
  password: '',
};

const LoginAdminPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit: IHandleSubmitAdminForm = (values) => {
    dispatch(actions.loginAdminPending(values));
  };

  return (
    <Container>
      <Card hoverable style={{ width: 500 }}>
        <Form
          name="LoginAdminPage"
          initialValues={initialLoginAdminFormValues}
          onFinish={onSubmit}
          autoComplete="off"
        >
          <Form.Item
            label="Admin"
            name="admin"
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
            label="Пароль"
            name="password"
            rules={[
              {
                required: true,
                min: 5,
                message: 'Пароль должен быть не менее 5 символов',
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
      </Card>
    </Container>
  );
};

export default LoginAdminPage;
