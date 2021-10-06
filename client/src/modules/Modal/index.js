import { Button } from 'antd';
import { useState } from 'react';
import CollectionCreateForm from './CollectionCreateForm';

const defaultFormItems = [
  {
    name: 'username',
    label: 'Your Name',
    defaultValue: '',
    rules: [
      {
        required: true,
        message: 'Please input smth',
      },
    ],
  },
  {
    name: 'password',
    label: 'Password',
    defaultValue: '',
    rules: [
      {
        required: true,
        message: 'Please input smth',
      },
    ],
  },
];

const defaultSubmitHandler = (values) => {
  console.log('Plase add submit handler in props', { values });
};

export default function ModalForm({
  title = 'Login',
  submitHandler = defaultSubmitHandler,
  formItems = defaultFormItems,
}) {
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    setVisible(false);
    submitHandler(values);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
      >
        {title}
      </Button>
      <CollectionCreateForm
        title={title}
        formItems={formItems}
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
}
