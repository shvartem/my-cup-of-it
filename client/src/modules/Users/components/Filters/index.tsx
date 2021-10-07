import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import CardUser from '../CardUser';

const {
  Header, Content, Footer, Sider,
} = Layout;

const { SubMenu } = Menu;

const Filters: React.FC = () => (
  <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <SubMenu key="sub1" title="Filters">
          <Menu.Item key="3">Filter1</Menu.Item>
          <Menu.Item key="4">Filter2</Menu.Item>
          <Menu.Item key="5">Filter3</Menu.Item>
          <Menu.Item key="6">Filter4</Menu.Item>
          <Menu.Item key="7">Filter5</Menu.Item>
          <Menu.Item key="8">Filter6</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          {/* <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
        </Breadcrumb>
        {/* <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          Bill is a cat.
        </div> */}
        <CardUser />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
);

export default Filters;
