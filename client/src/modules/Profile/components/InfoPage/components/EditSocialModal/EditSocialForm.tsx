import React from 'react';
import {
  Form, Input, Select,
} from 'antd';

import { IEditSocialsForm } from '../../types';

const EditSocialForm: React.FC<IEditSocialsForm> = ({ editSocials, socials, form }) => {
  const socialTitles = [
    { socialTitle: 'Telegram', defaultUrl: 't.me/username' },
    { socialTitle: 'WhatsApp', defaultUrl: 'wa.me/79876543210' },
    { socialTitle: 'LinkedIn', defaultUrl: 'linkedin.com/in/username' },
  ];
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
            key={el.socialTitle}
            label={el.socialTitle}
            name={el.socialTitle}
            initialValue={el.defaultUrl}
          >
            <Input addonBefore="https://" defaultValue={el.defaultUrl} />
          </Form.Item>
        ))}
      {!!socials.length
        && socials.map((el) => (
          <Form.Item
            key={el.socialTitle}
            label={el.socialTitle}
            name={el.socialTitle}
            initialValue={el.url}
          >
            <Input addonBefore="https://" defaultValue="mysite" />
          </Form.Item>
        ))}
    </Form>
  );
};

export default EditSocialForm;
