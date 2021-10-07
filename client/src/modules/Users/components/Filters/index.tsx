import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import CardUser from '../CardUser';

const {
  Header, Content, Footer, Sider,
} = Layout;

const { SubMenu } = Menu;

interface MyUser {
 id: number,
    firstname: string,
    lastname: string,
    isMentor: boolean,
    company: string,

    // technology: {}
}
interface userProps{
  users: MyUser[]
}

const Filters: React.FC<userProps> = ({ users }) => (

  <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <SubMenu key="sub1" title="Filters">
          {users.map((f) => <Menu.Item key={f.id}>{f.company}</Menu.Item>)}

        </SubMenu>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        {/* {users.map((user) => <CardUser key={user.id}>{user.firstname}</CardUser>)} */}
        <CardUser users={users} />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
);

export default Filters;
