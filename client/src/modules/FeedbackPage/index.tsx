import React from 'react';

import {
  Form, Input, InputNumber, Button,
} from 'antd';
import styled from 'styled-components';
import { FeedbackSubmitType } from './types';
import { actions } from '../../redux/slices';
import { useAppDispatch } from '../../hooks';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
`;

const initialFeedbackFormValues = {
  title: '',
  description: '',
};

const FeedbackPage: React.FC = () => {
  const dispatch = useAppDispatch();

  const onFinish: FeedbackSubmitType = (values) => {
    console.log(values);
    dispatch(actions.addNewFeedbackPending(values));
  };

  return (
    <Container>
      <Form
        name="feedbackForm"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={initialFeedbackFormValues}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          name="title"
          label="Тема"
          rules={[{
            required: true,
            message: 'Введите тему обращения',
          }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Описание"
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{
          span: 16, offset: 8,
        }}
        >
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default FeedbackPage;
