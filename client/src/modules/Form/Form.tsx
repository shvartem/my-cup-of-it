/* eslint-disable react/no-array-index-key */
import {
  Form, Input, Button,
} from 'antd';
import React from 'react';
import styled from 'styled-components';
import { AuthData } from '../types/authTypes';
import { defaultFormItems, defaultSubmitHandler } from './defaultFormSettings';
import { CustomItemProps } from '../types/customFormProps';
import { IProfile } from '../../types';

const Container = styled.div`
  margin: 50px auto;
`;

interface ICustomForm {
  formItems: CustomItemProps[];
  submitHandler: (values: IProfile) => void
}

const CustomForm: React.FC<ICustomForm> = ({
  formItems = defaultFormItems,
  submitHandler = defaultSubmitHandler,
  children,
}) => {
  const onFinish = (values: IProfile) => {
    submitHandler(values);
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
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        {/* {formItems.map((el, index) => ( */}
        {/* <Form.Item */}
        {/*   key={index} */}
        {/*   label={el.label} */}
        {/*   name={el.name} */}
        {/*   rules={el.rules} */}
        {/*   initialValue={el.initialValue} */}
        {/* > */}
        {/*   {el.isPassword ? <Input.Password /> : <Input />} */}
        {/* </Form.Item> */}
        {/* ))} */}
        {children}
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

export default CustomForm;
