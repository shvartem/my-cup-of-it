import React, { useState } from 'react';
import {
  Button, Form, Input, Modal,
} from 'antd';
import { IEditModal } from './types';

const EditModal: React.FC<IEditModal> = (props) => {
  const { visible, data } = props;

  const handleOk = () => {
    // onVisible(false);
  };

  const handleCancel = () => {
    // onVisible(false);
  };

  return (
    <Modal
      title="Редактирование"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Сохранить"
      cancelText="Отменить"
      closable
    >
      <Form
        name="AddCompanyForm"
        labelCol={{
          span: 6,
        }}
        initialValues={data}
        // onFinish={onSubmit}
        autoComplete="off"
      >
        <Form.Item
          label="Название"
          name="title"
          rules={[
            {
              required: true,
              message: 'Введите новое название компании',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Добавить
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
