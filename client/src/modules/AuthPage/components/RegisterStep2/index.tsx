import React, { useEffect } from 'react';
import {
  Form, Input, DatePicker, Button, Card, Select,
} from 'antd';
import {
  OnChangeRegisterValuesType, RegisterSubmitType, IRegisterProps,
} from '../../types';
import { actions } from '../../../../redux/slices';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { initialRegisterFormValues } from '../RegisterPage';
import { ButtonsWrapper } from '../style';

const { Option } = Select;

const RegisterStepTwo: React.FC<IRegisterProps> = ({ registerData, setRegisterData, setFormStep }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actions.getAllCompaniesPending());
    dispatch(actions.getAllTechnologiesPending());
  }, [dispatch]);

  const companies = useAppSelector((state) => state.companies.data);
  const technologies = useAppSelector((state) => state.technologies.data);

  const onSubmit: RegisterSubmitType = (values) => {
    dispatch(actions.registerUserPending({ ...registerData, ...values }));
  };

  const onChangeRegisterFormValues: OnChangeRegisterValuesType = (changedValues, allValues) => {
    setRegisterData((prevState: any) => ({ ...prevState, ...allValues }));
  };

  function goBack() {
    setFormStep(1);
  }

  const children = [];
  for (let i = 0; i < technologies.length; i += 1) {
    children.push(<Option value={technologies[i].id} key={technologies[i].title}>{technologies[i].title}</Option>);
  }
  return (
    <Card hoverable title="Продолжение регистрации" style={{ width: 500 }}>
      <Form
        onValuesChange={onChangeRegisterFormValues}
        name="registerForm2"
        labelCol={{
          span: 7,
        }}
        initialValues={initialRegisterFormValues}
        onFinish={onSubmit}
        autoComplete="off"
      >

        {registerData.isMentor && (
          <>
            <Form.Item
              label="Начало карьеры"
              name="careerStart"
              rules={[
                {
                  required: true,
                  message: 'Введите дату начала работы',
                },
              ]}
            >
              <DatePicker placeholder="01-01-2021" format="DD-MM-YYYY" />
            </Form.Item>
            <Form.Item
              label="Место работы"
              name="companyId"
              rules={[
                {
                  required: true,
                  message: 'Введите место работы',
                },
              ]}
            >
              <Select>
                {companies.map((company) => (
                  <Select.Option value={company.id}>{company.title}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </>
        )}
        <Form.Item
          label="О себе"
          name="description"
          rules={[
            {
              required: true,
              message: 'Введите информацию о себе',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Технологии"
          name="technologies"
          rules={[
            {
              required: true,
              message: 'Выберите используемые вами технологии',
            },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Please select"
            style={{ width: '100%' }}
          >
            {children}
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 16,
          }}
        >
          <ButtonsWrapper>
            <Button type="link" htmlType="submit" onClick={goBack}>
              Назад
            </Button>
            <Button type="primary" htmlType="submit">
              Продолжить
            </Button>
          </ButtonsWrapper>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default RegisterStepTwo;
