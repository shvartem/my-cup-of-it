import React from 'react';
import {
  Empty, List, Avatar, Alert,
} from 'antd';
import { useAppSelector } from '../../../../../../hooks';
import DeletePopConfirm from './components/DeleteButton';
import EditButton from './components/EditButton';

const CompanyList: React.FC = () => {
  const companies = useAppSelector((state) => state.companies.data);
  const error = useAppSelector((state) => state.companies.error);
  if (!companies.length) {
    return (
      <Empty description="Компаний пока нет" />
    );
  }

  return (
    <>
      {companies.length === 0 && (
      <Alert
        banner
        message="Пока нет ни одной компании"
        type="info"
        closable
      />
      )}
      {error && (
      <Alert
        banner
        message={error}
        type="error"
        closable
      />
      )}
      <List
        itemLayout="horizontal"
        dataSource={companies}
        renderItem={(company) => (
          <List.Item
            actions={[<EditButton key="edit" company={company} />, <DeletePopConfirm key="delete" company={company} />]}
          >
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href={`/companies/${company.id}`}>{company.title}</a>}
              description=""
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default CompanyList;
