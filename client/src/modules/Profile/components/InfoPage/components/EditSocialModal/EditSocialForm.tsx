import React from 'react';
import {
  Form, Input, Select,
} from 'antd';

import { IEditSocialsForm } from '../../types';

const EditSocialForm: React.FC<IEditSocialsForm> = ({ editSocials, socials, form }) => {
  const socialTitles = ['Telegram', 'WhatsApp', 'LinkedIn'];
  return (
    <Form
      form={form}
      name="edit-user"
      labelCol={{
        span: 7,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={editSocials}
      autoComplete="off"
    >
      {!socials.length
        && socialTitles.map((el) => (
          <Form.Item
            key={el}
            label={el}
            name={el}
          >
            <Input addonBefore="https://" defaultValue="mysite" />
          </Form.Item>
        ))}
      {socials.length
        && socials.map((el) => (
          <Form.Item
            key={el.socialTitle}
            label={el.socialTitle}
            name={el.socialTitle}
          >
            <Input addonBefore="https://" defaultValue="mysite" />
          </Form.Item>
        ))}
    </Form>
  );
};

export default EditSocialForm;
