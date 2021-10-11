import React from 'react';
import { Empty, List, Avatar } from 'antd';
import { useAppSelector } from '../../../../../../hooks';
import DeletePopConfirm from './components/DeleteButton';
import EditButton from './components/EditButton';

const CompanyList: React.FC = () => {
  const companies = useAppSelector((state) => state.companies.data);

  if (!companies.length) {
    return (
      <Empty description="Компаний пока нет" />
    );
  }

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={companies}
        renderItem={(company) => (
          <List.Item
            actions={[<EditButton key="edit" company={company} />, <DeletePopConfirm key="delete" company={company} />]}
          >
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{company.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default CompanyList;
