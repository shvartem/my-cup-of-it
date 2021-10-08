/* eslint-disable react/no-array-index-key */
import {
  Modal, Form, Input,
} from 'antd';

const { TextArea } = Input;
export default function CollectionCreateForm({
  visible, onCreate, onCancel, title, formItems,
}) {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title={title}
      okText="Отправить"
      cancelText=" Отменить"
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
            initialValue={el.initialValue}
          >
            {el.isTextarea ? <TextArea /> : <Input />}
          </Form.Item>
        ))}
      </Form>
    </Modal>
  );
}
