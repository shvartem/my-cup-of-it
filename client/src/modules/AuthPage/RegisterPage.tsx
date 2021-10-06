import { Form, Input, Checkbox } from 'antd';
import React from 'react';
import CustomForm from '../Form/Form';
import { CustomItemProps } from '../types/customFormProps';
import { actions } from '../../redux/slices';
import { AuthData } from '../types/authTypes';
import { useAppDispatch } from '../../hooks';
import { IProfile } from '../../types';

const formItems: CustomItemProps[] = [
  {
    name: 'firstname',
    label: 'Имя',
    initialValue: '',
    rules: [
      {
        required: true,
        message: 'Введите ваше имя',
      },
    ],
  },
  {
    name: 'lastname',
    label: 'Фамилия',
    initialValue: '',
    rules: [
      {
        required: true,
        message: 'Введите вашу фамилию',
      },
    ],
  },
  {
    name: 'email',
    label: 'Email',
    initialValue: '',
    rules: [
      {
        required: true,
        message: 'Введите ваш email',
        type: 'email',
      },
    ],
  },
  {
    name: 'password',
    label: 'Пароль',
    initialValue: '',
    isPassword: true,
    rules: [
      {
        required: true,
        min: 6,
        message: 'Пароль должен быть не менее 6 символов',
      },
    ],
  },
  {
    name: 'description',
    label: 'О себе',
    initialValue: '',
    rules: [
      {
        required: true,
        message: 'Расскажите о себе',
      },
    ],
  },
];

export default function RegisterPage() {
  const dispatch = useAppDispatch();

  function onSubmit(values: IProfile) {
    dispatch(actions.registerUserPending(values));
  }

  return (
    <CustomForm formItems={formItems} submitHandler={onSubmit}>
      <Form.Item
        label="Ваше имя"
        name="firstname"
        rules={[
          {
            required: true,
            message: 'Введите ваше имя',
          },
        ]}
        initialValue=""
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Ваша фамилия"
        name="lastname"
        rules={[
          {
            required: true,
            message: 'Введите ваше имя',
          },
        ]}
        initialValue=""
      >
        <Input />
      </Form.Item>
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
        initialValue=""
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
        initialValue=""
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
        initialValue=""
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
    </CustomForm>
  );
}
