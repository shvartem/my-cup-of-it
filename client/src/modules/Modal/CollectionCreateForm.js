/* eslint-disable react/no-array-index-key */
import {
  Modal, Form, Input,
} from 'antd';

export default function CollectionCreateForm({
  visible, onCreate, onCancel, title, formItems,
}) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title={title}
      okText="Submit"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        {formItems.map((el, index) => (
          <Form.Item
            key={index}
            name={el.name}
            label={el.label}
            rules={el.rules}
            initialValue={el.defaultValue}
          >
            <Input />
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
}
