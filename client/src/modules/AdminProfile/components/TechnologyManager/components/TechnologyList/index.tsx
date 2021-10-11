import React from 'react';
import { Empty, List, Avatar } from 'antd';
import { useAppSelector } from '../../../../../../hooks';
import DeletePopConfirm from './components/DeleteButton';
import EditButton from './components/EditButton';

const TechnologyList: React.FC = () => {
  const technologies = useAppSelector((state) => state.technologies.data);

  if (!technologies.length) {
    return (
      <Empty description="Тенгологий пока нет" />
    );
  }

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={technologies}
        renderItem={(technology) => (
          <List.Item
            actions={[
              <EditButton key="edit" technology={technology} />,
              <DeletePopConfirm key="delete" technology={technology} />,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{technology.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default TechnologyList;
